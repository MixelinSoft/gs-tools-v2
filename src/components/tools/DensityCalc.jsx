import { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import densityCalcFunction from './DensityCalcFunction';

const DensityCalc = () => {
  // Set calculateType
  const [type, setType] = useState('empty');
  // Inputs
  const [firstArg, setFirstArg] = useState('');
  const [secondArg, setSecondArg] = useState('');
  // Labels
  const [firstType, setFirstType] = useState('');
  const [secondType, setSecondType] = useState('');

  const setTypeHandler = (e) => {
    setType(e.target.value);
  };
  const firstArgHandler = (e) => {
    setFirstArg(e.target.value);
  };
  const secondArgHandler = (e) => {
    setSecondArg(e.target.value);
  };
  const calculate = () => {
    console.log(densityCalcFunction(type));
  };

  return (
    <>
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
        <br />
        <InputGroup>
          <Form.Control type='number' required></Form.Control>
          <InputGroup.Text>ч.</InputGroup.Text>
        </InputGroup>
        <br />
        <InputGroup>
          <Form.Control type='number' required></Form.Control>
          <InputGroup.Text>ч.</InputGroup.Text>
        </InputGroup>
        <br />
        <Button onClick={calculate} variant='dark'>
          SSS
        </Button>
      </>
    </>
  );
};

export default DensityCalc;
