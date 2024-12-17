import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SelectorGS from '../SelectorGS';
import BackButton from '../UI/BackButton';
import localization from '../../data/localization';
import gsDB from '../../data/GAS-STATION_DB';
import ModalInfo from '../UI/ModalInfo';

const ReportGenerator = (props) => {
  // Localization
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';
  const selectorGsText = localization[userSettingsLocalizaton].selectorGS;
  // Reports From Store State
  const [reports, setReports] = useState(null);
  // Loaded Report State
  const [report, setReport] = useState(null);
  // Loaded File Handler
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const decoder = new TextDecoder('windows-1251');
        const htmlContent = decoder.decode(e.target.result);
        setFileContent(htmlContent);
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert('Пожалуйста, выберите файл!');
    }
  };
  // Cashout State
  const [cashoutValue, setCashoutValue] = useState(0);
  // Cashout Handler
  const cashoutHandler = (e) => {
    setCashoutValue(e.target.value);
  };
  // Fuel Checks State
  const [fuelChecks, setFuelChecks] = useState(0);
  // Fuel Checks Handler
  const fuelChecksHandler = (e) => {
    setFuelChecks(e.target.value);
  };
  // Selectet GS State
  const [selectedGS, setSelectedGS] = useState(null);
  // Gas Station Handler
  const gsHandler = (value) => {
    const selectedGS = gsDB.filter((gs) => gs.gsId === value);
    setSelectedGS(selectedGS[0]);
  };
  const [showModal, setShowModal] = useState(false);
  const showModalToggler = (value) => {
    setShowModal(value);
  };
  // State for storing loaded file content
  const [fileContent, setFileContent] = useState(null);
  // Generated Report State
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  // Parse HTM File
  const processHtml = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const rows = [...doc.querySelectorAll('tr')];

    const result = {
      reportDate: null,
      fuelChecks: fuelChecks,
      coffee: {
        sum: 0,
        quantity: 0,
      },
      tea: {
        sum: 0,
        quantity: 0,
      },
      hotDog: {
        sum: 0,
        quantity: 0,
      },
      alcohol: {
        sum: 0,
        quantity: 0,
      },
      tobacco: {
        sum: 0,
        quantity: 0,
      },
      autoProducts: {
        sum: 0,
        quantity: 0,
      },
      washers: {
        sum: 0,
        quantity: 0,
      },
      daySum: {
        sum: 0,
        quantity: 0,
      },
    };

    rows.forEach((row) => {
      const cells = row.querySelectorAll('TD');

      const productName = cells[2]?.textContent.trim(); // Название товара
      const categoryName = cells[3]?.textContent.trim(); // Категория товара
      const quantity = parseFloat(cells[4]?.textContent.trim()) || 0; // Количество
      const sum = parseFloat(cells[5]?.textContent.trim()) || 0; // Сумма

      // Filtering
      if (
        categoryName === 'Кофе приготовление' &&
        (productName.includes('Кава') || productName.includes('Какао'))
      ) {
        result.coffee.sum += sum;
        result.coffee.quantity += quantity;
      }
      if (categoryName === 'Чай приготовление' && productName.includes('Чай')) {
        result.tea.sum += sum;
        result.tea.quantity += quantity;
      }
      if (
        categoryName === 'Приготовленные блюда' &&
        productName.includes('Хот-дог')
      ) {
        result.hotDog.sum += sum;
        result.hotDog.quantity += quantity;
      }
      if (
        categoryName === 'Водка' ||
        categoryName === 'Пиво' ||
        categoryName === 'Вино' ||
        categoryName === 'Слабоалкоголка' ||
        categoryName === 'Коньяк' ||
        categoryName === 'Шампанское' ||
        categoryName === 'Элитные спиртные напитки'
      ) {
        result.alcohol.sum += sum;
        result.alcohol.quantity += quantity;
      }
      if (
        categoryName === 'British American Tobacco' ||
        categoryName === 'Imperial Tobacco' ||
        categoryName === 'Japan Tobacco International' ||
        categoryName === 'Philip Morris' ||
        categoryName === 'Сигареты без НДС' ||
        categoryName === 'Тбилиси Тобакко' ||
        categoryName === 'Нікотинові подушечки' ||
        categoryName === 'Стіки для систем нагрівання тютюну' ||
        categoryName === 'Электронные сигареты и жидкости'
      ) {
        result.tobacco.sum += sum;
        result.tobacco.quantity += quantity;
      }
      if (
        (categoryName === 'Фильтры' ||
          categoryName === 'Масла фасованные' ||
          categoryName === 'Ароматизаторы' ||
          categoryName === 'Аксессуары и комплектующие' ||
          categoryName === 'Автохимия' ||
          categoryName === 'Автомобильная карта') &&
        !productName.includes('Омивач') &&
        !productName.includes('склоомивач')
      ) {
        result.autoProducts.sum += sum;
        result.autoProducts.quantity += quantity;
      }
      if (
        productName.includes('Омивач') ||
        productName.includes('склоомивач')
      ) {
        result.washers.sum += sum;
        result.washers.quantity += quantity;
      }
      if (productName.includes('Разом')) {
        result.daySum.sum += Math.round(+sum * 100 + +cashoutValue * 100) / 100;
        result.daySum.quantity += quantity;
      }
    });
    // Get Date from the report
    const headerText = doc.body.textContent; // Получение текста всего документа
    const dateMatch = headerText.match(/\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2}/); // Поиск даты
    if (dateMatch) {
      const reportDate = new Date(
        dateMatch[0].replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1'),
      ); // Преобразование в формат Date
      result.reportDate = reportDate;

      // Форматируем дату в формат "ДДММГГ"
      const formattedDate = `${String(reportDate.getDate()).padStart(
        2,
        '0',
      )}${String(reportDate.getMonth() + 1).padStart(2, '0')}${String(
        reportDate.getFullYear(),
      ).slice(-2)}`;

      saveReportToLocalStorage(result, formattedDate);
    }

    setReport(result);
    setIsGeneratingReport(false);
  };

  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat('uk-UA', options).format(
      date,
    );

    // Заменяем склонения на нужный падеж вручную
    const daysOfWeek = {
      понеділок: 'понеділок',
      вівторок: 'вівторок',
      середу: 'середа',
      четвер: 'четвер',
      пʼятницю: 'п’ятниця',
      суботу: 'субота',
      неділю: 'неділя',
    };

    let result = formattedDate;
    Object.keys(daysOfWeek).forEach((day) => {
      if (result.includes(day)) {
        result = result.replace(day, daysOfWeek[day]);
      }
    });

    return result;
  };
  const saveReportToLocalStorage = (newReport, dateKey) => {
    // Получаем текущие отчёты из localStorage
    const storedReports =
      JSON.parse(localStorage.getItem('productReports')) || {};

    // Добавляем новый отчёт в объект с ключом из загруженной даты
    storedReports[dateKey] = newReport;

    // Получаем все ключи (даты) отчётов
    const dates = Object.keys(storedReports);

    // Если количество отчётов больше 8, удаляем самые старые
    if (dates.length > 8) {
      // Сортируем даты и удаляем самые старые (первые по порядку)
      const sortedDates = dates.sort();
      const oldestDate = sortedDates[0];
      delete storedReports[oldestDate];
    }

    // Сохраняем обновлённый объект в localStorage
    localStorage.setItem('productReports', JSON.stringify(storedReports));
  };

  const getPreviousWeekReport = (date) => {
    const prevWeekDate = new Date(date);
    prevWeekDate.setDate(prevWeekDate.getDate() - 7);
    const formattedPrevDate = `${String(prevWeekDate.getDate()).padStart(
      2,
      '0',
    )}${String(prevWeekDate.getMonth() + 1).padStart(2, '0')}${String(
      prevWeekDate.getFullYear(),
    ).slice(-2)}`;

    const storedReports =
      JSON.parse(localStorage.getItem('productReports')) || {};
    return storedReports[formattedPrevDate];
  };

  const calculateDifference = (current, previous) => {
    return Math.round(current * 100 - previous * 100) / 100;
  };

  useEffect(() => {
    const reportsFromStore = localStorage.getItem('productReports');

    if (reportsFromStore) {
      const parsedReports = JSON.parse(reportsFromStore);
      setReports(parsedReports);
      console.log(parsedReports);
    } else {
      console.log('Reports not found');
    }
  }, []);

  const generateReport = () => {
    processHtml(fileContent); // Generate report only when button is clicked
    showModalToggler(true); // Show modal after generating report
  };

  // Generate Report Preview
  const reportHtml = selectedGS && report && (
    <div>
      <p>{`АЗС №${selectedGS.gsNumber} ${selectedGS.gsFirm}`}</p>
      <p>{formatDate(report.reportDate)}</p>
      <p>{`Паливні чеки: ${fuelChecks} `}</p>
      <p>
        {`Кава: ${report.coffee.quantity}/${report.coffee.sum} (${
          reports &&
          getPreviousWeekReport(report.reportDate) &&
          calculateDifference(
            report.coffee.quantity,
            getPreviousWeekReport(report.reportDate).coffee.quantity,
          )
        })`}
      </p>
      <p>{`Чай: ${report.tea.quantity}/${report.tea.sum} (${
        reports &&
        getPreviousWeekReport(report.reportDate) &&
        calculateDifference(
          report.tea.quantity,
          getPreviousWeekReport(report.reportDate).tea.quantity,
        )
      })`}</p>
      <p>{`Хот-дог: ${report.hotDog.quantity}/${report.hotDog.sum} (${
        reports &&
        getPreviousWeekReport(report.reportDate) &&
        calculateDifference(
          report.hotDog.quantity,
          getPreviousWeekReport(report.reportDate).hotDog.quantity,
        )
      })`}</p>
      <p>{`Алкоголь: ${report.alcohol.quantity}/${report.alcohol.sum} (${
        reports &&
        getPreviousWeekReport(report.reportDate) &&
        calculateDifference(
          report.alcohol.quantity,
          getPreviousWeekReport(report.reportDate).alcohol.quantity,
        )
      })`}</p>
      <p>{`Тютюн: ${report.tobacco.quantity}/${report.tobacco.sum} (${
        reports &&
        getPreviousWeekReport(report.reportDate) &&
        calculateDifference(
          report.tobacco.quantity,
          getPreviousWeekReport(report.reportDate).tobacco.quantity,
        )
      })`}</p>
      <p>{`Автотовари: ${report.autoProducts.quantity}/${
        report.autoProducts.sum
      } (${
        reports &&
        getPreviousWeekReport(report.reportDate) &&
        calculateDifference(
          report.autoProducts.quantity,
          getPreviousWeekReport(report.reportDate).autoProducts.quantity,
        )
      })`}</p>
      <p>{`Омивач: ${report.washers.quantity}/${report.washers.sum} (${
        reports &&
        getPreviousWeekReport(report.reportDate) &&
        calculateDifference(
          report.washers.quantity,
          getPreviousWeekReport(report.reportDate).washers.quantity,
        )
      })`}</p>
      <p>{`Разом: ${report.daySum.quantity}/${report.daySum.sum} (${
        reports &&
        getPreviousWeekReport(report.reportDate) &&
        calculateDifference(
          report.daySum.sum,
          getPreviousWeekReport(report.reportDate).daySum.sum,
        )
      })`}</p>
    </div>
  );

  return (
    <div>
      <SelectorGS
        changerId={gsHandler}
        param={'gsNumber'}
        lang={selectorGsText}
      />
      {selectedGS && (
        <>
          <Form.Group controlId='fuelChecks' className='mb-3'>
            <Form.Label>Fuel Checks</Form.Label>
            <Form.Control
              value={fuelChecks}
              onChange={fuelChecksHandler}
              type='number'
              size='lg'
            />
          </Form.Group>
          <Form.Group controlId='cashoutValue' className='mb-3'>
            <Form.Label>Is CashOut (Видача Готівки Клієнту)</Form.Label>
            <Form.Control
              value={cashoutValue}
              onChange={cashoutHandler}
              type='number'
              size='lg'
            />
          </Form.Group>
          <Form.Group controlId='formFileLg' className='mb-3'>
            <Form.Label>Select Report</Form.Label>
            <Form.Control type='file' size='lg' onChange={handleFileChange} />
          </Form.Group>
        </>
      )}
      <Button
        disabled={!selectedGS || !fileContent}
        variant={'dark'}
        onClick={() => {
          showModalToggler(true);
        }}
      >
        Generate Report
      </Button>

      <ModalInfo
        headerText={'Your Report is ready!'}
        bodyText={reportHtml}
        showToggler={generateReport}
        show={showModal}
      />
      <BackButton />
    </div>
  );
};

export default ReportGenerator;
