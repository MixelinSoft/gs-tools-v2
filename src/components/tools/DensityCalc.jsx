import densityCalcFunction from './DensityCalcFunction';
import localization from '../../data/localization';

import { useState, useEffect } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import ResultZone from '../ResultZone';
import BackButton from '../UI/BackButton';
import ScrollIntoView from 'react-scroll-into-view';

const DensityCalc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';
  const text = localization[userSettingsLocalizaton].tools.densityCalc;
  // Set Calculate Type
  const [type, setType] = useState('empty');
  // Inputs
  const [firstArg, setFirstArg] = useState('');
  const [secondArg, setSecondArg] = useState('');
  // Labels / Types
  const types = ['л', 'кг', 'кг/м³'];
  const [firstType, setFirstType] = useState(types[0]);
  const [secondType, setSecondType] = useState(types[2]);
  const [firstTypeLabel, setFirstTypeLabel] = useState('');
  const [secondTypeLabel, setSecondTypeLabel] = useState('');
  // Result
  const [result, changeResult] = useState(0);
  // Type Handler
  const setTypeHandler = (e) => {
    setType(e.target.value);
    if (e.target.value === 'volume') {
      setFirstType(types[1]);
      setSecondType(types[2]);
      setFirstTypeLabel(text.units.inputLabel.weight);
      setSecondTypeLabel(text.units.inputLabel.density);
    }
    if (e.target.value === 'weight') {
      setFirstType(types[0]);
      setSecondType(types[2]);
      setFirstTypeLabel(text.units.inputLabel.volume);
      setSecondTypeLabel(text.units.inputLabel.density);
    }
    if (e.target.value === 'density') {
      setFirstType(types[0]);
      setSecondType(types[1]);
      setFirstTypeLabel(text.units.inputLabel.volume);
      setSecondTypeLabel(text.units.inputLabel.weight);
    }
    setFirstArg('');
    setSecondArg('');
  };
  //Input Handlers
  const firstArgHandler = (e) => {
    const input = e.target.value;
    setFirstArg(input);
  };
  const secondArgHandler = (e) => {
    let input = e.target.value;
    // Masking for density
    if (type !== 'density') {
      if (input.length >= 6) {
        input = input.slice(0, 6);
      }
    }
    setSecondArg(input);
  };
  // Result Handler
  const resultHandler = (result) => {
    changeResult(result);
  };
  // Calculate
  const calculate = (e) => {
    e.preventDefault();
    if (type === 'volume') {
      resultHandler(
        `${text.units.inputSelect.volume} - ${densityCalcFunction(
          type,
          firstArg,
          secondArg
        )}${types[0]}`
      );
    }
    if (type === 'weight') {
      resultHandler(
        `${text.units.inputSelect.weight} - ${densityCalcFunction(
          type,
          firstArg,
          secondArg
        )}${types[1]}`
      );
    }
    if (type === 'density') {
      resultHandler(
        `${text.units.inputSelect.density} - ${densityCalcFunction(
          type,
          firstArg,
          secondArg
        )}${types[1]}`
      );
    }
  };

  return (
    <>
      <BackButton />
      <FloatingLabel label={text.inputLabel_1}>
        <Form.Select
          // aria-label='Default select example'
          size='lg'
          defaultValue='empty'
          onChange={setTypeHandler}>
          <option value='empty' disabled>
            {text.inputSelect_1}
          </option>
          <option value='volume'>{text.units.inputSelect.volume}</option>
          <option value='weight'>{text.units.inputSelect.weight}</option>
          <option value='density'>{text.units.inputSelect.density}</option>
        </Form.Select>
      </FloatingLabel>
      <>
        <br />
        {type === 'empty' ? (
          ''
        ) : (
          <Form onSubmit={calculate}>
            <Form.Label>{text.inputLabel_2}</Form.Label> <br />
            <Form.Label>
              {text.inputLabel_3_1 + firstTypeLabel + text.inputLabel_3_2}
            </Form.Label>
            <InputGroup>
              <Form.Control
                onChange={firstArgHandler}
                type='number'
                step='0.01'
                value={firstArg}
                required></Form.Control>
              <InputGroup.Text>{firstType}</InputGroup.Text>
            </InputGroup>
            <br />
            <Form.Label>
              {text.inputLabel_3_1 + secondTypeLabel + text.inputLabel_3_2}
            </Form.Label>
            <InputGroup>
              <Form.Control
                onChange={secondArgHandler}
                type='number'
                step='0.0001'
                value={secondArg}
                required></Form.Control>
              <InputGroup.Text>{secondType}</InputGroup.Text>
            </InputGroup>
            <br />
            <ScrollIntoView selector='#resultZone'>
              <Button type='submit' variant='dark'>
                {text.button_1}
              </Button>
            </ScrollIntoView>
          </Form>
        )}
        <div id='resultZone'>
          {result !== 0 ? <ResultZone text={`${result}`} /> : ''}
        </div>
      </>
    </>
  );
};

export default DensityCalc;
