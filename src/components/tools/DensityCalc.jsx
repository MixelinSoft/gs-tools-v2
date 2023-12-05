import { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import ResultZone from '../ResultZone';
import densityCalcFunction from './DensityCalcFunction';
import BackButton from '../UI/BackButton';

const DensityCalc = () => {
  // Set Calculate Type
  const [type, setType] = useState('empty');
  // Inputs
  const [firstArg, setFirstArg] = useState('');
  const [secondArg, setSecondArg] = useState('');
  const [secondArgStep, setSecondArgStep] = useState('0.10');
  // Labels / Types
  const types = ['л', 'кг', 'кг/м³'];
  const [firstType, setFirstType] = useState(types[0]);
  const [secondType, setSecondType] = useState(types[2]);
  // Result
  const [result, changeResult] = useState(0);
  // Type Handler
  const setTypeHandler = (e) => {
    setType(e.target.value);
    if (e.target.value === 'volume') {
      setFirstType(types[1]);
      setSecondType(types[2]);
    }
    if (e.target.value === 'weight') {
      setFirstType(types[0]);
      setSecondType(types[2]);
    }
    if (e.target.value === 'density') {
      setFirstType(types[0]);
      setSecondType(types[1]);
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
        `При плотности ${secondArg}кг/м³ и весе ${firstArg}кг рассчитанный объём - ${densityCalcFunction(
          type,
          firstArg,
          secondArg
        )}л.`
      );
    }
    if (type === 'weight') {
      resultHandler(
        `При плотности ${secondArg}кг/м³ и объёме ${firstArg}л рассчитанный вес - ${densityCalcFunction(
          type,
          firstArg,
          secondArg
        )}кг.`
      );
    }
    if (type === 'density') {
      resultHandler(
        `При весе ${secondArg} и объёме ${firstArg} рассчитанная плотность - ${densityCalcFunction(
          type,
          firstArg,
          secondArg
        )}кг/м³.`
      );
    }
  };

  return (
    <>
      <BackButton />
      <FloatingLabel label='Что вычислять'>
        <Form.Select
          aria-label='Default select example'
          size='lg'
          defaultValue='empty'
          onChange={setTypeHandler}>
          <option value='empty' disabled>
            Open this select menu
          </option>
          <option value='volume'>Объём</option>
          <option value='weight'>Вес</option>
          <option value='density'>Плотность</option>
        </Form.Select>
      </FloatingLabel>
      <>
        <br />
        {type === 'empty' ? (
          ''
        ) : (
          <Form onSubmit={calculate}>
            <Form.Label>Заполните известные данные:</Form.Label>
            <InputGroup>
              <Form.Control
                onChange={firstArgHandler}
                type='number'
                min='0.1'
                step={secondArgStep}
                value={firstArg}
                required></Form.Control>
              <InputGroup.Text>{firstType}</InputGroup.Text>
            </InputGroup>
            <br />
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
            <Button type='submit' variant='dark'>
              Рассчитать
            </Button>
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
