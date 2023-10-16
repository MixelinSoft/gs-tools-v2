import gsDB from "../../data/gsDB";

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ScrollIntoView from "react-scroll-into-view";
import ResultZone from "../ResultZone";
import SelectorGS from "../SelectorGS";
import BackButton from "../UI/BackButton";
import ModalInfo from "../UI/ModalInfo";

const Calibration = () => {
  const [gsId, changeGsId] = useState("empty");
  const [typeGS, changeTypeGS] = useState("empty");
  const [volume, changeVolume] = useState("");
  const [tube, changeTube] = useState(true);
  const [result, changeResult] = useState(0);
  const [modalShowState, setModalShowState] = useState(false);
  const [modalInfo, changeModalInfo] = useState({});

  const changeTypeGSHandler = (type) => {
    changeTypeGS(type);
    changeModalInfoHandler({
      header: "Информация о резервуаре",
      body: (
        <div>
          <h2>Резервуар №{selectedGS.tables[type].tankId}</h2>
          <p>Вид топлива: {selectedGS.tables[type].type}</p>
          <p>Трубопровод: {selectedGS.tables[type].tube}л</p>
          <p>Мёртвый остаток: {selectedGS.tables[type].minCapcity}л</p>
          <p>Максимальный объём: {selectedGS.tables[type].maxCapacity}л</p>
          <p>Максимальная высота: {selectedGS.tables[type].maxHeight}см</p>
        </div>
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
      volume -= tank.tube;
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
    changeResultHandler(autoCalibrate(volume, selectedGS.tables[tank], tube));
  };

  return (
    <>
      <SelectorGS param={"tables"} changerId={changeGsIdHandler} />
      {gsId === "empty" ? (
        ""
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
              <Form.Label>Выберите вид топлива</Form.Label>
              <Form.Select
                defaultValue="empty"
                onChange={(e) => {
                  changeTypeGSHandler(e.target.value);
                }}>
                <option value={typeGS} disabled>
                  Нажмите для выбора вида топлива
                </option>
                {Object.keys(selectedGS.tables).map((gasType) => (
                  <option
                    value={gasType}
                    key={selectedGS.tables[gasType].tankId}>
                    {`${selectedGS.tables[gasType].tankId}. ${selectedGS.tables[gasType].type}`}
                  </option>
                ))}
              </Form.Select>
              <br></br>
              <Form.Label>Введите объём топлива в л</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => changeVolumeHandler(e.target.value)}
                value={volume}
                placeholder="Нажмите для ввода"
                required
              />
              <Form.Text className="text-muted">Например 1234.5</Form.Text>
              <Form.Check
                type="switch"
                label="Значение включает в себя трубопровод?"
                checked={tube}
                onChange={() => changeTube(!tube)}
              />
            </Form.Group>
            <br></br>
            {volume !== 0 && typeGS !== "empty" ? (
              <>
                <ScrollIntoView selector="#resultZone">
                  <Button variant="dark" type="submit">
                    Рассчитать!
                  </Button>
                  <br></br>
                </ScrollIntoView>
                <br></br>
                <Button
                  variant="dark"
                  onClick={() => setModalShowHandler(true)}>
                  Информация о резервуаре
                </Button>
              </>
            ) : (
              ""
            )}
          </Form>

          <div id="resultZone">
            {result === 0 ? (
              ""
            ) : !result ? (
              <ResultZone alert text="Ошибка! Некорректные данные!" />
            ) : result <= selectedGS.tables[typeGS].minHeight ? (
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
