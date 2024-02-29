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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';
  const text = localization[userSettingsLocalizaton].tools.reCalibrate;

  const [gsId, changeGsId] = useState('empty');
  const [typeGS, changeTypeGS] = useState('empty');
  const [volume, changeVolume] = useState('');
  const [tube, changeTube] = useState(true);
  const [result, changeResult] = useState(0);
  const [resultVolume, changeResultVolume] = useState(0);
  const [modalShowState, setModalShowState] = useState(false);
  const [modalInfo, changeModalInfo] = useState({});

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
  const changeVolumeHandler = (volume) => {
    changeVolume(volume);
  };
  const changeGsIdHandler = (id) => {
    changeGsId(id);
  };

  const changeResultHandler = (result) => {
    changeResult(result);
  };
  const changeResultVolumeHandler = (result) => {
    changeResultVolume(result);
  };
  const setModalShowHandler = (show) => {
    setModalShowState(show);
  };
  const changeModalInfoHandler = (info) => {
    changeModalInfo(info);
  };
  const [selectedGS] = gsDB.filter((gs) => gs.gsId === gsId);

  const autoCalibrate = (volume, tank, tube) => {
    let result = 0;

    if (tube) {
      changeResultVolumeHandler(volume - tank.tube);
      volume = volume - tank.tube;
    } else {
      changeResultVolumeHandler(volume);
    }

    if (tank.capacityTable.includes(+volume)) {
      result = tank.capacityTable.indexOf(+volume);
    } else if (+volume <= tank.maxCapacity) {
      tank.capacityTable.forEach((el, index) => {
        if (+volume > el && +volume < tank.capacityTable[index + 1]) {
          let tail = Math.round(
            (+volume - el) / ((tank.capacityTable[index + 1] - el) / 10)
          );
          result = `${index},${tail}`;
        }
      });
    } else {
      result = false;
    }

    return result;
  };

  const calculate = (volume, tank, tube) => {
    changeResultHandler(
      autoCalibrate(
        +volume.replace(',', '.'),
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
              calculate(volume, typeGS, tube);
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
                  onChange={(e) => changeVolumeHandler(e.target.value)}
                  value={volume}
                  placeholder={text.inputPlaceholder_1}
                  required
                />
                <InputGroup.Text>л</InputGroup.Text>
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
            {volume !== 0 && typeGS !== 'empty' ? (
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
            {resultVolume < 0 ? (
              <ResultZone alert text={text.resultText_1} />
            ) : result === 0 ? (
              ''
            ) : !result ? (
              <ResultZone alert text={text.resultText_2} />
            ) : resultVolume < tables[selectedGS.gsId][typeGS].minCapacity ? (
              <ResultZone
                alert
                text={`${text.resultText_3}${
                  tables[selectedGS.gsId][typeGS].minCapacity
                }л ${text.resultText_4}${result}см`}
              />
            ) : (
              <ResultZone text={`${text.resultText_4}${result}см`} />
            )}
          </div>
        </>
      )}
      <BackButton />
    </>
  );
};

export default Calibration;
