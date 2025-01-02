import { Button } from 'react-bootstrap';
import { FaRegCopy, FaWhatsapp } from 'react-icons/fa';

const parser = new DOMParser();
// Parse Date
const parseDate = (date, isReportMonthly = false) => {
  const dateObject = new Date(date);
  if (isReportMonthly) {
    return new Intl.DateTimeFormat('uk-UA', {
      month: 'long',
      year: 'numeric',
    }).format(dateObject);
  }
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formattedDate = new Intl.DateTimeFormat('uk-UA', options).format(
    dateObject,
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

// Parse Difference
const parseDifference = (current, previous, tag) => {
  const sign = current - previous > 0 ? '+' : '';
  const text =
    current === previous
      ? '(0)'
      : `(${sign}${current - previous}${tag ? tag : ''})`;
  return text;
};
// Buffer Function
const copy = (text) => {
  navigator.clipboard.writeText(text);
};
const share = (text) => {
  navigator.clipboard.writeText(text);
  window.open('https:&#47&#47web.whatsapp.com&#47');
};
// // Parsers
export const parseHTML = (htmlContent, isReportMonthly = false) => {
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
    if (productName.includes('Омивач') || productName.includes('склоомивач')) {
      result.washers.sum += sum;
      result.washers.quantity += quantity;
    }
    if (productName.includes('Разом' || 'Итого:')) {
      result.daySum.sum += sum;
      result.daySum.quantity += quantity;
    }
    if (productName.includes('Видача готівки')) {
      result.daySum.sum += -sum;
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
    );
    result.reportDate = reportDate;
  }
  return result;
};

export const parseReportToText = (
  reportObject,
  gasStation,
  toolText,
  isReportMonthly = false,
) => {
  console.log(gasStation);
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

  const gs =
    gasStation && gasStation !== 'empty'
      ? `АЗС №${gasStation.gsNumber} ${gasStation.gsFirm}`
      : '';
  const date = parseDate(reportObject.reportDate, isReportMonthly);
  const fuelChecks = `Паливні чеки: ${reportObject.fuelChecks} ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(reportObject.fuelChecks, prevWeekReport.fuelChecks)
      : ''
  }`;
  const coffee = `Кава: ${reportObject.coffee.quantity}/${
    reportObject.coffee.sum
  } ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(
          reportObject.coffee.quantity,
          prevWeekReport.coffee.quantity,
        )
      : ''
  }`;
  const tea = `Чай: ${reportObject.tea.quantity}/${reportObject.tea.sum} ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(reportObject.tea.quantity, prevWeekReport.tea.quantity)
      : ''
  }`;
  const vitaminTea = `Чай вітамінний: ${reportObject.vitaminTea.quantity}/${
    reportObject.vitaminTea.sum
  } ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(
          reportObject.vitaminTea.quantity,
          prevWeekReport.vitaminTea.quantity,
        )
      : ''
  }`;
  const hotDogs = `Хот-доги: ${reportObject.hotDogs.quantity}/${
    reportObject.hotDogs.sum
  } ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(
          reportObject.hotDogs.quantity,
          prevWeekReport.hotDogs.quantity,
        )
      : ''
  }`;
  const snacks = `Снеки: ${reportObject.snacks.quantity}/${
    reportObject.snacks.sum
  } ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(
          reportObject.snacks.quantity,
          prevWeekReport.snacks.quantity,
        )
      : ''
  }`;
  const drinks = `Напої: ${reportObject.drinks.quantity}/${
    reportObject.drinks.sum
  } ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(
          reportObject.drinks.quantity,
          prevWeekReport.drinks.quantity,
        )
      : ''
  }`;
  const alcohol = `Алкоголь: ${reportObject.alcohol.quantity}/${
    reportObject.alcohol.sum
  } ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(
          reportObject.alcohol.quantity,
          prevWeekReport.alcohol.quantity,
        )
      : ''
  }`;
  const tobacco = `Тютюн: ${reportObject.tobacco.quantity}/${
    reportObject.tobacco.sum
  } ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(
          reportObject.tobacco.quantity,
          prevWeekReport.tobacco.quantity,
        )
      : ''
  }`;
  const autoProducts = `Автотовари: ${reportObject.autoProducts.quantity}/${
    reportObject.autoProducts.sum
  } ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(
          reportObject.autoProducts.quantity,
          prevWeekReport.autoProducts.quantity,
        )
      : ''
  }`;
  const washers = `Омивач: ${reportObject.washers.quantity}/${
    reportObject.washers.sum
  } ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(
          reportObject.washers.quantity,
          prevWeekReport.washers.quantity,
        )
      : ''
  }`;
  const others = `Інше: ${reportObject.others.quantity}/${
    reportObject.others.sum
  } ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(
          reportObject.others.quantity,
          prevWeekReport.others.quantity,
        )
      : ''
  } `;
  const summary = `Разом: ${reportObject.daySum.quantity}/${
    reportObject.daySum.sum
  } ${
    prevWeekReport && !isReportMonthly
      ? parseDifference(
          reportObject.daySum.sum,
          prevWeekReport.daySum.sum,
          ' грн.',
        )
      : ''
  }`;

  const text =
    `${gasStation && gasStation !== 'empty' ? `${gs}\n` : ''}` +
    `${date}\n
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
${summary}`;

  return (
    <div>
      {gasStation && gasStation !== 'empty' && <p>{gs}</p>}
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
