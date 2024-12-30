import { useEffect, useRef, useState } from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';
import SelectorGS from '../SelectorGS';
import localization from '../../data/localization';
import gsDB from '../../data/GAS-STATION_DB';
import BackButton from '../UI/BackButton';
import ModalInfo from '../UI/ModalInfo';
import { FaRegCopy, FaWhatsapp } from 'react-icons/fa';
import { IoMdHelpCircleOutline } from 'react-icons/io';
// Import Guide Images
import f1 from '../../images/reportGenerator/fuelChecks/1.png';
import f2 from '../../images/reportGenerator/fuelChecks/2.png';
import f3 from '../../images/reportGenerator/fuelChecks/3.png';
import f4 from '../../images/reportGenerator/fuelChecks/4.png';
import r1 from '../../images/reportGenerator/createReport/1.png';
import r2 from '../../images/reportGenerator/createReport/2.png';
import r3 from '../../images/reportGenerator/createReport/3.png';
import r4 from '../../images/reportGenerator/createReport/4.png';
import r5 from '../../images/reportGenerator/createReport/5.png';
import r6 from '../../images/reportGenerator/createReport/6.png';
import r7 from '../../images/reportGenerator/createReport/7.png';
import r8 from '../../images/reportGenerator/createReport/8.png';
import r9 from '../../images/reportGenerator/createReport/9.png';

const ReportGenerator = (props) => {
  // // Local Storage
  // Localization
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';
  const text = localization[userSettingsLocalizaton];
  const toolText = localization[userSettingsLocalizaton].tools.reportGenerator;
  // Stored Reports
  const storedReports =
    JSON.parse(localStorage.getItem('productReports')) || {};
  // Create DOM Parser
  const parser = new DOMParser();

  // // States // //
  const [activeKey, setActiveKey] = useState(null);
  // Gas Station State
  const [gasStation, setGasStation] = useState('empty');
  const gasStationHandler = (gsId) => {
    const selectedGS = gsDB.filter((gs) => gs.gsId === gsId);
    setGasStation(selectedGS[0]);
  };
  // Fuel Checks State
  const [fuelChecks, setFuelChecks] = useState('');
  const fuelChecksHandler = (e) => {
    if (e === '') {
      setFuelChecks('');
    } else {
      setFuelChecks(+e.target.value);
    }
  };
  // Loaded Report State
  const [loadedReport, setLoadedReport] = useState('');
  const loadedReportHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file.type === 'text/html') {
      reader.onload = (e) => {
        const decoder = new TextDecoder('windows-1251');
        const htmlContent = decoder.decode(e.target.result);
        const doc = parser.parseFromString(htmlContent, 'text/html');

        if (
          doc.querySelector('body').textContent.includes('Підсумковий звіт')
        ) {
          setLoadedReport(htmlContent);
        } else {
          errorModalContentHandler(
            <div>
              <span>
                {toolText.errors.incorrectReport}
                <button
                  className={'helpButton'}
                  onClick={(e) => {
                    e.preventDefault();
                    showReportCreateGuideHandler(true);
                  }}
                >
                  <IoMdHelpCircleOutline className={'helpButtonIconBlack'} />
                </button>
              </span>
            </div>,
          );
          showErrorModalHandler(true);
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      showErrorModalHandler(true);
      errorModalContentHandler(
        <div>
          <span>
            {toolText.errors.incorrectFileType}
            <button
              className={'helpButton'}
              onClick={(e) => {
                e.preventDefault();
                showReportCreateGuideHandler(true);
              }}
            >
              <IoMdHelpCircleOutline className={'helpButtonIconBlack'} />
            </button>
          </span>
        </div>,
      );
    }

    if (loadedReport !== '') {
      fuelChecksHandler('');
    }
  };
  // Generated Report State
  const [generatedReport, setGeneratedReport] = useState(null);
  // Show Modal State
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = (value) => {
    setShowModal(value);
  };
  // Show Guide States
  const [showFuelChecksGuide, setShowFuelChecksGuide] = useState(false);
  const showFuelChecksGuideHandler = (value) => {
    setShowFuelChecksGuide(value);
  };
  const [showReportCreateGuide, setShowReportCreateGuide] = useState(false);
  const showReportCreateGuideHandler = (value) => {
    setShowErrorModal(false);
    setShowReportCreateGuide(value);
  };
  // Error Modal State
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorModalContent, setErrorModalContent] = useState('');
  const showErrorModalHandler = (value) => {
    setShowErrorModal(value);
  };
  const errorModalContentHandler = (content) => {
    setErrorModalContent(content);
  };

  // // Refs
  // Saved Reports Accordeon Ref
  const accordionRef = useRef(null);

  // // Functions // //
  // Parse HTML
  const parseHTML = (htmlContent) => {
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const rows = [...doc.querySelectorAll('tr')];

    const result = {
      coffee: {
        sum: 0,
        quantity: 0,
      },
      tea: {
        sum: 0,
        quantity: 0,
      },
      vitaminTea: {
        sum: 0,
        quantity: 0,
      },
      hotDogs: {
        sum: 0,
        quantity: 0,
      },
      snacks: {
        sum: 0,
        quantity: 0,
      },
      drinks: {
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
      others: {
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
      const sum = Math.round(parseFloat(cells[5]?.textContent.trim()) || 0); // Сумма

      // Filtering
      if (
        categoryName === 'Кофе приготовление' &&
        (productName.includes('Кава') || productName.includes('Какао'))
      ) {
        result.coffee.sum += sum;
        result.coffee.quantity += quantity;
      }
      if (
        categoryName === 'Чай приготовление' &&
        productName.includes('Чай') &&
        !productName.includes('вітамінний')
      ) {
        result.tea.sum += sum;
        result.tea.quantity += quantity;
      }
      if (
        categoryName === 'Чай приготовление' &&
        productName.includes('вітамінний')
      ) {
        result.vitaminTea.sum += sum;
        result.vitaminTea.quantity += quantity;
      }
      if (
        categoryName === 'Приготовленные блюда' &&
        productName.includes('Хот-дог')
      ) {
        result.hotDogs.sum += sum;
        result.hotDogs.quantity += quantity;
      }
      if (categoryName.includes('Чипсы') || categoryName === 'Сухарики') {
        result.snacks.sum += sum;
        result.snacks.quantity += quantity;
      }
      if (
        categoryName === 'Энергетические напитки' ||
        categoryName === 'Соки' ||
        categoryName === 'Напитки'
      ) {
        result.drinks.sum += sum;
        result.drinks.quantity += quantity;
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
        categoryName === 'NOSSMOKE' ||
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
        result.daySum.sum += sum;
        result.daySum.quantity += quantity;
      }
      if (productName.includes('Видача готівки')) {
        result.daySum.sum += -sum;
        console.log(productName, sum);
      }
      result.others.sum =
        result.daySum.sum -
        result.coffee.sum -
        result.tea.sum -
        result.vitaminTea.sum -
        result.hotDogs.sum -
        result.snacks.sum -
        result.drinks.sum -
        result.alcohol.sum -
        result.tobacco.sum -
        result.autoProducts.sum -
        result.washers.sum;
      result.others.quantity =
        result.daySum.quantity -
        result.coffee.quantity -
        result.tea.quantity -
        result.vitaminTea.quantity -
        result.hotDogs.quantity -
        result.snacks.quantity -
        result.drinks.quantity -
        result.alcohol.quantity -
        result.tobacco.quantity -
        result.autoProducts.quantity -
        result.washers.quantity;
    });
    // Get Date from the report
    const headerText = doc.body.textContent; // Получение текста всего документа
    const dateMatch = headerText.match(/\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2}/); // Поиск даты
    if (dateMatch) {
      const reportDate = new Date(
        dateMatch[0].replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1'),
      ); // Преобразование в формат Date
      result.reportDate = reportDate;
      // saveReportToLocalStorage(result, formattedDate);
    }

    // setReport(result);
    // setIsGeneratingReport(false);
    return result;
  };
  // Parse Date
  const parseDate = (date) => {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat('uk-UA', options).format(
      date,
    );
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
  // ParseReport
  const parseReportToText = (reportObject) => {
    const reports = JSON.parse(localStorage.getItem('productReports')) || {};
    const prevWeekDate = new Date(reportObject.reportDate);
    prevWeekDate.setDate(prevWeekDate.getDate() - 7);
    const formattedPrevDate = `${String(prevWeekDate.getDate()).padStart(
      2,
      '0',
    )}${String(prevWeekDate.getMonth() + 1).padStart(2, '0')}${String(
      prevWeekDate.getFullYear(),
    ).slice(-2)}`;
    const prevWeekReport = reports[formattedPrevDate];

    const gs = `АЗС №${gasStation.gsNumber} ${gasStation.gsFirm}`;
    const date = parseDate(reportObject.reportDate);
    const fuelChecks = `Паливні чеки: ${reportObject.fuelChecks} ${
      prevWeekReport
        ? parseDifference(reportObject.fuelChecks, prevWeekReport.fuelChecks)
        : ''
    }`;
    const coffee = `Кава: ${reportObject.coffee.quantity}/${
      reportObject.coffee.sum
    } ${
      prevWeekReport
        ? parseDifference(
            reportObject.coffee.quantity,
            prevWeekReport.coffee.quantity,
          )
        : ''
    }`;
    const tea = `Чай: ${reportObject.tea.quantity}/${reportObject.tea.sum} ${
      prevWeekReport
        ? parseDifference(
            reportObject.tea.quantity,
            prevWeekReport.tea.quantity,
          )
        : ''
    }`;
    const vitaminTea = `Чай вітамінний: ${reportObject.vitaminTea.quantity}/${
      reportObject.vitaminTea.sum
    } ${
      prevWeekReport
        ? parseDifference(
            reportObject.vitaminTea.quantity,
            prevWeekReport.vitaminTea.quantity,
          )
        : ''
    }`;
    const hotDogs = `Хот-доги: ${reportObject.hotDogs.quantity}/${
      reportObject.hotDogs.sum
    } ${
      prevWeekReport
        ? parseDifference(
            reportObject.hotDogs.quantity,
            prevWeekReport.hotDogs.quantity,
          )
        : ''
    }`;
    const snacks = `Снеки: ${reportObject.snacks.quantity}/${
      reportObject.snacks.sum
    } ${
      prevWeekReport
        ? parseDifference(
            reportObject.snacks.quantity,
            prevWeekReport.snacks.quantity,
          )
        : ''
    }`;
    const drinks = `Напої: ${reportObject.drinks.quantity}/${
      reportObject.drinks.sum
    } ${
      prevWeekReport
        ? parseDifference(
            reportObject.drinks.quantity,
            prevWeekReport.drinks.quantity,
          )
        : ''
    }`;
    const alcohol = `Алкоголь: ${reportObject.alcohol.quantity}/${
      reportObject.alcohol.sum
    } ${
      prevWeekReport
        ? parseDifference(
            reportObject.alcohol.quantity,
            prevWeekReport.alcohol.quantity,
          )
        : ''
    }`;
    const tobacco = `Тютюн: ${reportObject.tobacco.quantity}/${
      reportObject.tobacco.sum
    } ${
      prevWeekReport
        ? parseDifference(
            reportObject.tobacco.quantity,
            prevWeekReport.tobacco.quantity,
          )
        : ''
    }`;
    const autoProducts = `Автотовари: ${reportObject.autoProducts.quantity}/${
      reportObject.autoProducts.sum
    } ${
      prevWeekReport
        ? parseDifference(
            reportObject.autoProducts.quantity,
            prevWeekReport.autoProducts.quantity,
          )
        : ''
    }`;
    const washers = `Омивач: ${reportObject.washers.quantity}/${
      reportObject.washers.sum
    } ${
      prevWeekReport
        ? parseDifference(
            reportObject.washers.quantity,
            prevWeekReport.washers.quantity,
          )
        : ''
    }`;
    const others = `Інше: ${reportObject.others.quantity}/${
      reportObject.others.sum
    } ${
      prevWeekReport
        ? parseDifference(
            reportObject.others.quantity,
            prevWeekReport.others.quantity,
          )
        : ''
    } `;
    const summary = `Разом: ${reportObject.daySum.quantity}/${
      reportObject.daySum.sum
    } ${
      prevWeekReport
        ? parseDifference(
            reportObject.daySum.sum,
            prevWeekReport.daySum.sum,
            ' грн.',
          )
        : ''
    }`;

    const text = `${gs}
${date}\n
${fuelChecks}
${coffee}
${tea}
${vitaminTea}
${hotDogs}
${snacks}
${drinks}
${alcohol}
${tobacco}
${autoProducts}
${washers}
${others}
${summary}
`;

    return (
      <div>
        <p>{gs}</p>
        <p>{date}</p>
        <p>{fuelChecks}</p>
        <p>{coffee}</p>
        <p>{tea}</p>
        <p>{vitaminTea}</p>
        <p>{hotDogs}</p>
        <p>{snacks}</p>
        <p>{drinks}</p>
        <p>{alcohol}</p>
        <p>{tobacco}</p>
        <p>{autoProducts}</p>
        <p>{washers}</p>
        <p>{others}</p>
        <p>{summary}</p>
        <Button
          style={{ marginRight: '14px' }}
          onClick={() => {
            copy(text);
          }}
          variant='dark'
        >
          {toolText.buttonCopy + ' '}
          <FaRegCopy
            style={{
              fontSize: '14px',
            }}
          />
        </Button>
        <Button
          onClick={() => {
            share(text);
          }}
          variant='dark'
        >
          {toolText.buttonShare + ' '}
          <FaWhatsapp
            style={{
              fontSize: '14px',
            }}
          />
        </Button>
      </div>
    );
  };
  // Parse Report To Preview
  const parseReportToPreview = (reportObject) => {
    const date = reportObject.date;
    const fuelChecks = `Паливні чеки: ${reportObject.fuelChecks}`;
    const coffee = `Кава: ${reportObject.coffee.quantity}/${reportObject.coffee.sum}`;
    const tea = `Чай: ${reportObject.tea.quantity}/${reportObject.tea.sum}`;
    const vitaminTea = `Чай вітамінний: ${reportObject.vitaminTea.quantity}/${reportObject.vitaminTea.sum}`;
    const hotDogs = `Хот-доги: ${reportObject.hotDogs.quantity}/${reportObject.hotDogs.sum}`;
    const snacks = `Снеки: ${reportObject.snacks.quantity}/${reportObject.snacks.sum}`;
    const drinks = `Напої: ${reportObject.drinks.quantity}/${reportObject.drinks.sum}`;
    const alcohol = `Алкоголь: ${reportObject.alcohol.quantity}/${reportObject.alcohol.sum}`;
    const tobacco = `Тютюн: ${reportObject.tobacco.quantity}/${reportObject.tobacco.sum}`;
    const autoProducts = `Автотовари: ${reportObject.autoProducts.quantity}/${reportObject.autoProducts.sum}`;
    const washers = `Омивач: ${reportObject.washers.quantity}/${reportObject.washers.sum}`;
    const others = `Інше: ${reportObject.others.quantity}/${reportObject.others.sum}`;
    const summary = `Разом: ${reportObject.daySum.quantity}/${reportObject.daySum.sum}`;
    return (
      <div>
        <p>{date}</p>
        <p>{fuelChecks}</p>
        <p>{coffee}</p>
        <p>{tea}</p>
        <p>{vitaminTea}</p>
        <p>{hotDogs}</p>
        <p>{snacks}</p>
        <p>{drinks}</p>
        <p>{alcohol}</p>
        <p>{tobacco}</p>
        <p>{autoProducts}</p>
        <p>{washers}</p>
        <p>{others}</p>
        <p>{summary}</p>
      </div>
    );
  };
  // Parse Difference
  const parseDifference = (current, previous, tag) => {
    const sign = current - previous > 0 ? '+' : '';
    const text =
      current === previous
        ? '(0)'
        : `(${sign}${current - previous}${tag ? tag : ''})`;
    return text;
  };
  // Guides Content
  const fuelChecksGuide = (
    <div className={'guideBody'}>
      <p>{toolText.guideFuelChecks.p1}</p>
      <img src={f1} alt='Fuel Checks Guide' />
      <br />
      <br />
      <p>{toolText.guideFuelChecks.p2}</p>
      <img src={f2} alt='Fuel Checks Guide' />
      <br />
      <br />
      <br />
      <p>{toolText.guideFuelChecks.p3}</p>
      <img src={f3} alt='Fuel Checks Guide' />
      <p>{toolText.guideFuelChecks.p4}</p>
      <img src={f4} alt='Fuel Checks Guide' />
    </div>
  );
  const reportCreateGuide = (
    <div className={'guideBody'}>
      <p>{toolText.guideReportExport.p1}</p>
      <img src={r1} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p2}</p>
      <img src={r2} alt='Report Guide' />
      <br />
      <br />
      <br />
      <p>{toolText.guideReportExport.p3}</p>
      <img src={r3} alt='Report Guide' />
      <p>{toolText.guideReportExport.p4}</p>
      <br />
      <br />
      <img src={r4} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p5}</p>
      <img src={r5} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p6}</p>
      <br />
      <img src={r6} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p7}</p>
      <br />
      <br />
      <img src={r7} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p8}</p>

      <img src={r8} alt='Report Guide' />
      <br />
      <br />
      <p>{toolText.guideReportExport.p9}</p>
      <img src={r9} alt='Report Guide' />
    </div>
  );

  // Generate Report
  const generateReport = () => {
    const storedReports =
      JSON.parse(localStorage.getItem('productReports')) || {};
    const formattedDate = `${String(
      generatedReport.reportDate.getDate(),
    ).padStart(2, '0')}${String(
      generatedReport.reportDate.getMonth() + 1,
    ).padStart(2, '0')}${String(generatedReport.reportDate.getFullYear()).slice(
      -2,
    )}`;
    storedReports[formattedDate] = generatedReport;
    const dates = Object.keys(storedReports);
    if (dates.length > 14) {
      const sortedDates = dates.sort();
      const oldestDate = sortedDates[0];
      delete storedReports[oldestDate];
    }
    localStorage.setItem('productReports', JSON.stringify(storedReports));
    showModalHandler(true);
  };

  const copy = (text) => {
    navigator.clipboard.writeText(text);
  };
  const share = (text) => {
    navigator.clipboard.writeText(text);
    window.open('https:&#47&#47web.whatsapp.com&#47');
  };

  // Generate Report On Input
  useEffect(() => {
    setGeneratedReport(null);
    if (loadedReport !== '' && gasStation !== 'empty' && fuelChecks !== '') {
      const reportObject = parseHTML(loadedReport);

      reportObject.fuelChecks = fuelChecks;
      reportObject.daySum.sum = Math.round(reportObject.daySum.sum * 100) / 100;

      setGeneratedReport(reportObject);
    }
  }, [gasStation, fuelChecks, loadedReport]);
  // Close Accordion On Outside Click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        setActiveKey(null); // Закрыть аккордеон
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <Accordion
        ref={accordionRef}
        activeKey={activeKey}
        onSelect={(e) => setActiveKey(e)}
      >
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Saved Reports</Accordion.Header>
          <Accordion.Body>
            {Object.keys(storedReports).map((date) => {
              return (
                <Button
                  key={date}
                  variant='dark'
                  className='reportButton'
                  onClick={() =>
                    console.log(parseReportToText(storedReports[date]))
                  }
                >{`${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(
                  4,
                  6,
                )}`}</Button>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <Form>
        <SelectorGS
          changerId={gasStationHandler}
          param={'gsNumber'}
          lang={text.selectorGS}
        />
        <br />
        <Form.Group controlId='fuelChecksInput' className='mb-3'>
          <Form.Label>
            {toolText.labelFuel}
            <button
              className={'helpButton'}
              onClick={(e) => {
                e.preventDefault();
                showFuelChecksGuideHandler(true);
              }}
            >
              <IoMdHelpCircleOutline className={'helpButtonIcon'} />
            </button>
          </Form.Label>
          <Form.Control
            placeholder={toolText.inputPlaceholder}
            value={fuelChecks}
            onChange={fuelChecksHandler}
            type='number'
            size='lg'
          />
        </Form.Group>
        <Form.Group controlId='formFileLg' className='mb-3'>
          <Form.Label>
            {toolText.labelReport}
            <button
              className={'helpButton'}
              onClick={(e) => {
                e.preventDefault();
                showReportCreateGuideHandler(true);
              }}
            >
              <IoMdHelpCircleOutline className={'helpButtonIcon'} />
            </button>
          </Form.Label>
          <Form.Control type='file' size='lg' onChange={loadedReportHandler} />
        </Form.Group>
        {generatedReport && (
          <Button variant={'dark'} onClick={generateReport}>
            {toolText.buttonGenerate}
          </Button>
        )}
      </Form>
      {generatedReport && (
        <ModalInfo
          headerText={toolText.modalHeader}
          bodyText={parseReportToText(generatedReport)}
          showToggler={showModalHandler}
          show={showModal}
        />
      )}
      {/* Guides Modals */}
      <ModalInfo
        headerText={toolText.guideHeader}
        bodyText={fuelChecksGuide}
        show={showFuelChecksGuide}
        showToggler={showFuelChecksGuideHandler}
      />
      <ModalInfo
        headerText={toolText.guideHeader}
        bodyText={reportCreateGuide}
        show={showReportCreateGuide}
        showToggler={showReportCreateGuideHandler}
      />
      {/* Error Modal */}
      <ModalInfo
        headerText={toolText.errors.errorHeader}
        bodyText={errorModalContent}
        show={showErrorModal}
        showToggler={showErrorModalHandler}
      />
      <BackButton />
    </>
  );
};

export default ReportGenerator;
