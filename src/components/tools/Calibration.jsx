import gsDB from '../../data/GAS-STATION_DB';
import tables from '../../data/CALIBRATION_TABLES';
import localization from '../../data/localization';

import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import ScrollIntoView from 'react-scroll-into-view';
import ResultZone from '../ResultZone';
import SelectorGS from '../SelectorGS';
import SelectorGasType from '../UI/SelectorGasType';
import BackButton from '../UI/BackButton';
import ModalInfo from '../UI/ModalInfo';
import TankInfo from '../UI/TankInfo';

const Calibration = () => {
  // Scroll Up on start
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Localization
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';
  const text = localization[userSettingsLocalizaton].tools.calibration;

  // Input States
  const [gsId, changeGsId] = useState('empty');
  const [typeGS, changeTypeGS] = useState('empty');
  const [height, changeHeight] = useState('');
  const [tube, changeTube] = useState(true);
  const [result, changeResult] = useState(0);
  const [resultHeight, changeResultHeight] = useState(0);

  // Info States
  const [modalShowState, setModalShowState] = useState(false);
  const [modalInfo, changeModalInfo] = useState({});

  // Change Handlers
  const changeTypeGSHandler = (type) => {
    changeTypeGS(type);
    changeModalInfoHandler({
      header: localization[userSettingsLocalizaton].tankInfo.header_1,
      body: (
        <TankInfo
          tank={tables[selectedGS.gsId][type]}
          lang={localization[userSettingsLocalizaton].tankInfo}
        />
      ),
    });
    changeResultHandler(0);
  };
  const changeHeightHandler = (height) => {
    changeHeight(height);
  };
  const changeGsIdHandler = (id) => {
    changeGsId(id);
  };
  const changeResultHandler = (result) => {
    changeResult(result);
  };

  const changeResultHeightHandler = (result) => {
    changeResultHeight(result);
  };
  const setModalShowHandler = (show) => {
    setModalShowState(show);
  };
  const changeModalInfoHandler = (info) => {
    changeModalInfo(info);
  };

  const [selectedGS] = gsDB.filter((gs) => gs.gsId === gsId);

  // Main Logic
  const autoCalibrate = (height, tank, tube) => {
    let afterRound;
    const levelHi = Math.ceil(height),
      levelLow = Math.floor(height);

    if (height % 1) {
      afterRound = +(height + '').split('.')[1].substr(0, 1);
    } else {
      afterRound = 0;
    }
    const tail =
      ((tank.capacityTable[levelHi] - tank.capacityTable[levelLow]) / 10) *
      afterRound;
    if (tube === true) {
      changeResultHeightHandler(
        Math.round(tank.capacityTable[levelLow] + tail)
      );
      return Math.round(tank.capacityTable[levelLow] + tank.tube + tail);
    }
    changeResultHeightHandler(Math.round(tank.capacityTable[levelLow] + tail));
    return Math.round(tank.capacityTable[levelLow] + tail);
  };

  const calculate = (height, tank, tube) => {
    changeResultHandler(
      autoCalibrate(
        +height.replace(',', '.'),
        tables[selectedGS.gsId][tank],
        tube
      )
    );
  };

  return (
    <>
      <SelectorGS
        param={'tables'}
        changerId={changeGsIdHandler}
        lang={localization[userSettingsLocalizaton].selectorGS}
      />
      {gsId === 'empty' ? (
        ''
      ) : (
        <>
          <ModalInfo
            show={modalShowState}
            showToggler={setModalShowState}
            headerText={modalInfo.header}
            bodyText={modalInfo.body}
          />
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              calculate(height, typeGS, tube);
            }}>
            <Form.Group>
              <br />
              <SelectorGasType
                changeTypeGSHandler={changeTypeGSHandler}
                typeGS={typeGS}
                selectedGS={selectedGS}
                lang={localization[userSettingsLocalizaton].selectorGasType}
              />
              <br></br>
              <Form.Label>{text.inputLabel_1}</Form.Label>
              <InputGroup>
                <Form.Control
                  type='text'
                  onChange={(e) => changeHeightHandler(e.target.value)}
                  value={height}
                  placeholder={text.inputPlaceholder_1}
                  required
                />
                <InputGroup.Text>см</InputGroup.Text>
              </InputGroup>
              <br />
              <InputGroup>
                <Form.Check
                  className='switch'
                  type='switch'
                  label={text.inputLabel_2}
                  checked={tube}
                  onChange={() => changeTube(!tube)}
                />
              </InputGroup>
            </Form.Group>
            <br></br>
            {height !== 0 && typeGS !== 'empty' ? (
              <>
                <ScrollIntoView selector='#resultZone'>
                  <Button variant='dark' type='submit'>
                    {text.button_1}
                  </Button>
                  <br></br>
                </ScrollIntoView>
                <br></br>
                <Button
                  variant='dark'
                  onClick={() => setModalShowHandler(true)}>
                  {text.button_2}
                </Button>
              </>
            ) : (
              ''
            )}
          </Form>

          <div id='resultZone'>
            {result === 0 ? (
              ''
            ) : resultHeight < tables[selectedGS.gsId][typeGS].minCapacity ? (
              <ResultZone
                alert
                text={`${text.resultText_1}${
                  tables[selectedGS.gsId][typeGS].minCapacity
                }л \n${text.resultText_3}${result}л`}
              />
            ) : !result ? (
              <ResultZone alert text={text.resultText_2} />
            ) : (
              <ResultZone text={`${text.resultText_3}${result}л`} />
            )}
          </div>
        </>
      )}
      <BackButton />
    </>
  );
};

export default Calibration;
