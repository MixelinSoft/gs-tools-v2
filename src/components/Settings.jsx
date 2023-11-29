import { useState } from 'react';

import { Container, InputGroup, FloatingLabel, Button } from 'react-bootstrap';
import BackButton from './UI/BackButton';
import Form from 'react-bootstrap/Form';

const Settings = ({ onChangeLocalization, localization }) => {
  const [selectedLocalization, setSelectedLocalization] = useState('empty');
  const setLocalizationHandler = (lang) => {
    setSelectedLocalization(lang);
  };
  const localizationHandler = () => {
    if (selectedLocalization !== 'empty') {
      onChangeLocalization(selectedLocalization);
      console.log(selectedLocalization);
    }
  };

  return (
    <Container className='infoContainer'>
      <BackButton />
      <h1>{localization.title}</h1>
      <InputGroup>
        <FloatingLabel label='Testing'>
          <Form.Select
            defaultValue='empty'
            onChange={(e) => setLocalizationHandler(e.target.value)}>
            <option value={selectedLocalization} disabled>
              Select language
            </option>
            <option value='ua'>Укранська</option>
            <option value='ru'>Русский </option>
            {/* <option value='3'>English</option> */}
          </Form.Select>
        </FloatingLabel>
        <Button
          onClick={localizationHandler}
          disabled={selectedLocalization === 'empty' ? true : false}
          variant={selectedLocalization === 'empty' ? 'secondary' : 'dark'}>
          {localization.button_1}
        </Button>
        {/* <Button onClick={localizationHandler}>{localization.button_1}</Button> */}
      </InputGroup>
    </Container>
  );
};

export default Settings;
