import gsDB from '../../data/gsDB';
import localization from '../../data/localization';

import { useState } from 'react';
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
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';

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
          tank={selectedGS.tables[type]}
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
      autoCalibrate(+volume.replace(',', '.'), selectedGS.tables[tank], tube)
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
              <Form.Label>Введите объём топлива в л</Form.Label>
              <InputGroup>
                <Form.Control
                  type='text'
                  onChange={(e) => changeVolumeHandler(e.target.value)}
                  value={volume}
                  placeholder='Нажмите для ввода'
                  required
                />
                <InputGroup.Text>л</InputGroup.Text>
              </InputGroup>
              <br />
              <InputGroup>
                <Form.Check
                  className='switch'
                  type='switch'
                  label='Значение включает в себя трубопровод?'
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
                    Рассчитать!
                  </Button>
                  <br></br>
                </ScrollIntoView>
                <br></br>
                <Button
                  variant='dark'
                  onClick={() => setModalShowHandler(true)}>
                  Информация о резервуаре
                </Button>
              </>
            ) : (
              ''
            )}
          </Form>
          <div id='resultZone'>
            {resultVolume < 0 ? (
              <ResultZone alert text={`Ошибка! Значение меньше допустимого!`} />
            ) : result === 0 ? (
              ''
            ) : !result ? (
              <ResultZone alert text='Ошибка! Некорректные данные!' />
            ) : resultVolume < selectedGS.tables[typeGS].minCapcity ? (
              <ResultZone
                alert
                text={`Внимание! Объём топлива ниже мёртвого остатка: ${selectedGS.tables[typeGS].minCapcity}л Высота напролнения: ${result}см`}
              />
            ) : (
              <ResultZone text={`Высота наполнения: ${result}см`} />
            )}
          </div>
        </>
      )}
      <BackButton />
    </>
  );
};

export default Calibration;
