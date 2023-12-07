import salaryCalcFunction from './salaryCalcFunction';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ScrollIntoView from 'react-scroll-into-view';
import ResultZone from '../ResultZone';
import BackButton from '../UI/BackButton';
import localization from '../../data/localization';

const SalaryCalc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';
  const text = localization[userSettingsLocalizaton].tools.salaryCalc;

  const [hours, changeHours] = useState('');
  const [liters, changeLiters] = useState('');
  const [hoursPrice, changeHoursPrice] = useState('40.90');
  const [litersPrice, changeLitersPrice] = useState(0.12);
  const [result, changeResult] = useState(0);

  const changeHoursHandler = (newHours) => {
    changeHours(newHours);
  };
  const changeHoursPriceHandler = (newHoursPrice) => {
    changeHoursPrice(newHoursPrice);
  };
  const changeLitersHandler = (newLiters) => {
    changeLiters(newLiters);
  };
  const changeLitersPriceHandler = (newLiterPrice) => {
    changeLitersPrice(newLiterPrice);
  };
  const calculateSalary = (hours, hoursPrice, liters, litersPrice) => {
    changeResult(salaryCalcFunction(hours, hoursPrice, liters, litersPrice));
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          calculateSalary(hours, hoursPrice, liters, litersPrice);
          changeHoursHandler('');
          changeLiters('');
        }}>
        <Form.Group>
          <Form.Label>{text.inputLabel_1}</Form.Label>
          <Row>
            <Col>
              <InputGroup>
                <Form.Control
                  type='number'
                  onChange={(e) => changeHoursHandler(e.target.value)}
                  value={hours}
                  placeholder={text.inputPlaceholder_1}
                  required
                />
                <InputGroup.Text>{text.hours}</InputGroup.Text>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <Form.Control
                  type='number'
                  onChange={(e) => changeHoursPriceHandler(e.target.value)}
                  value={hoursPrice}
                  required
                />
                <InputGroup.Text>грн</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>{text.inputLabel_2}</Form.Label>
          <Row>
            <Col>
              <InputGroup>
                <Form.Control
                  type='number'
                  onChange={(e) => changeLitersHandler(e.target.value)}
                  value={liters}
                  placeholder={text.inputPlaceholder_2}
                  required
                />
                <InputGroup.Text>л</InputGroup.Text>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <Form.Control
                  type='number'
                  onChange={(e) => changeLitersPriceHandler(e.target.value)}
                  value={litersPrice}
                  required
                />
                <InputGroup.Text>грн</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>
        <br />

        <ScrollIntoView selector='#resultZone'>
          <Button variant='dark' type='submit'>
            {text.button_1}
          </Button>
        </ScrollIntoView>
      </Form>

      <div id='resultZone'>
        {result > 0 ? (
          <ResultZone
            text={`${text.resultText_2} = ${Math.round(result)}грн`}
          />
        ) : result === 0 ? (
          <ResultZone invisible />
        ) : (
          <ResultZone alert text={text.resultText_1} />
        )}
      </div>
      <BackButton />
    </>
  );
};

export default SalaryCalc;
