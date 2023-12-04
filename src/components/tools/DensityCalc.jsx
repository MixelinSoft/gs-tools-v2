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
  };
  //Input Handlers
  const firstArgHandler = (e) => {
    setFirstArg(e.target.value);
  };
  const secondArgHandler = (e) => {
    setSecondArg(e.target.value);
  };
  // Result Handler
  const resultHandler = (result) => {
    changeResult(result);
  };
  // Calculate
  const calculate = (e) => {
    e.preventDefault();
    console.log(densityCalcFunction(type, firstArg, secondArg));
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
              <Form.Control type='number' required></Form.Control>
              <InputGroup.Text>{firstType}</InputGroup.Text>
            </InputGroup>
            <br />
            <InputGroup>
              <Form.Control type='number' required></Form.Control>
              <InputGroup.Text>{secondType}</InputGroup.Text>
            </InputGroup>
            <br />
            <Button type='submit' variant='dark'>
              Рассчитать
            </Button>
          </Form>
        )}
      </>
    </>
  );
};

export default DensityCalc;
