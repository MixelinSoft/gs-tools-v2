import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    }
  };
  const navigate = useNavigate();

  const resetHandler = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  return (
    <Container className='infoContainer'>
      <BackButton />
      <h1>{localization.title}</h1>
      <InputGroup>
        <FloatingLabel label={localization.selectLabel_1}>
          <Form.Select
            defaultValue='empty'
            onChange={(e) => setLocalizationHandler(e.target.value)}>
            <option value={selectedLocalization} disabled>
              {localization.select_1}
            </option>
            <option value='ua'>Українська</option>
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
      </InputGroup>
      <br></br>
      <InputGroup>
        <Button variant='danger' onClick={resetHandler}>
          {localization.button_reset}
        </Button>
      </InputGroup>
    </Container>
  );
};

export default Settings;
