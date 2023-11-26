import { useState } from 'react';
import Moment from 'react-moment';
import ResultZone from '../ResultZone';
import BackButton from '../UI/BackButton';
import { Form, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import ScrollIntoView from 'react-scroll-into-view';
import localization from '../../data/localization';
if (localStorage.getItem('language') === 'ru') {
  import('moment/locale/ru').then(() => {});
} else if (localStorage.getItem('language') === 'ua') {
  import('moment/locale/uk').then(() => {});
}

const ExpirationDates = () => {
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';
  const text = localization[userSettingsLocalizaton].tools.expirationDate;
  const [manufacture, changeManufacture] = useState(new Date());
  const [term, changeTerm] = useState('');
  const [units, changeUnits] = useState('months');
  const [result, changeResult] = useState({
    result: 0,
    toDate: 0,
    isExpired: true,
  });

  const localeForDate =
    userSettingsLocalizaton === 'ua'
      ? 'uk-UA'
      : userSettingsLocalizaton === 'ru'
      ? 'ru-RU'
      : 'uk-UA';
  const changeResultHandler = (result, toDate, isExpired) => {
    changeResult({ result, toDate, isExpired });
  };
  const changeTermHandler = (term) => {
    changeTerm(term);
  };

  const changeUnitsHandler = (units) => {
    changeUnits(units);
  };

  const changeManufactureHandler = (manufacture) => {
    changeManufacture(manufacture);
  };

  const calculate = (manufacture, term, units) => {
    const manufactureDate = new Date(manufacture);
    const now = new Date();
    let isExpired = false;

    if (units === 'days') {
      manufactureDate.setDate(manufactureDate.getDate() + +term);
    } else if (units === 'months') {
      manufactureDate.setMonth(manufactureDate.getMonth() + +term);
    } else if (units === 'years') {
      manufactureDate.setFullYear(manufactureDate.getFullYear() + +term);
    }

    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    ).valueOf();
    const manufactureDateEx = new Date(
      manufactureDate.getFullYear(),
      manufactureDate.getMonth(),
      manufactureDate.getDate()
    ).valueOf();

    if (today > manufactureDateEx) {
      isExpired = true;
    } else {
      isExpired = false;
    }

    changeResultHandler(
      manufactureDate.toLocaleDateString(localeForDate, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      manufactureDate.toISOString(),
      isExpired
    );
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          calculate(manufacture, term, units);
        }}>
        <Form.Group>
          <Form.Label>{text.inputLabel_1}</Form.Label>
          <Form.Control
            onChange={(e) => changeManufactureHandler(e.target.value)}
            type='date'
            value={manufacture}
            placeholder={text.inputPlaceholder_2}
            required
          />
          {/* <Form.Text className="text-muted">
            Введите вручную или нажмите на символ "календарь"
          </Form.Text> */}
          <br />
          <Form.Label>{text.inputLabel_2}</Form.Label>
          <InputGroup>
            {' '}
            <Form.Control
              onChange={(e) => changeTermHandler(e.target.value)}
              value={term}
              type='number'
              min='0'
              placeholder={text.inputPlaceholder_2}
              required
            />
            <Form.Select
              value={units}
              onChange={(e) => changeUnitsHandler(e.target.value)}>
              <option value='days'>{text.inputSelect1_2}</option>
              <option value='months'>{text.inputSelect2_2}</option>
              <option value='years'>{text.inputSelect3_2}</option>
            </Form.Select>
          </InputGroup>
        </Form.Group>

        <br />
        <ScrollIntoView selector='#resultZone'>
          <Button variant='dark' type='submit'>
            {text.button_1}
          </Button>
        </ScrollIntoView>
      </Form>
      <BackButton />
      <div id='resultZone'>
        {result.result === 0 ? (
          ''
        ) : !result.result ? (
          <ResultZone alert text={text.resultText_1} />
        ) : result.isExpired ? (
          <ResultZone
            alert
            text={`${text.resultText_2} ${result.result}`}
            children={
              <>
                {text.resultText_3}
                <Moment to={result.toDate}></Moment>
              </>
            }
          />
        ) : result.result ? (
          <ResultZone
            children={
              <>
                {text.resultText_4}
                <Moment to={result.toDate}></Moment>
              </>
            }
            text={`${text.resultText_5} ${result.result}`}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default ExpirationDates;
