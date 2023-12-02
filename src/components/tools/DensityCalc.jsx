import { useState } from 'react';
import { Form } from 'react-bootstrap';

const DensityCalc = () => {
  const [type, setType] = useState('1');
  return (
    <>
      <Form.Check label='1' name='type' value='1' type='radio' variant='dark' />
      <Form.Check label='2' name='type' value='2' type='radio' />
      <Form.Check label='3' name='type' value='3' type='radio' />
    </>
  );
};

export default DensityCalc;
