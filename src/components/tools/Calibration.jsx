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
  const [height, changeHeight] = useState("");
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
  const changeHeightHandler = (height) => {
    changeHeight(height);
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

  const autoCalibrate = (height, tank, tube) => {
    let afterRound;
    const levelHi = Math.ceil(height),
      levelLow = Math.floor(height);

    if (height % 1) {
      afterRound = +(height + "").split(".")[1].substr(0, 1);
    } else {
      afterRound = 0;
    }
    const tail =
      ((tank.capacityTable[levelHi] - tank.capacityTable[levelLow]) / 10) *
      afterRound;
    if (tube === true) {
      return Math.round(tank.capacityTable[levelLow] + tank.tube + tail);
    }
    return Math.round(tank.capacityTable[levelLow] + tail);
  };

  const calculate = (height, tank, tube) => {
    changeResultHandler(
      autoCalibrate(+height.replace(",", "."), selectedGS.tables[tank], tube)
    );
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
              calculate(height, typeGS, tube);
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
              <Form.Label>Введите высоту топлива с метрштока в см</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => changeHeightHandler(e.target.value)}
                value={height}
                placeholder="Нажмите для ввода"
                required
              />
              <Form.Text className="text-muted">Например 123.4</Form.Text>
              <Form.Check
                type="switch"
                label="Учитывать трубопровод в рассчётах?"
                checked={tube}
                onChange={() => changeTube(!tube)}
              />
            </Form.Group>
            <br></br>
            {height !== 0 && typeGS !== "empty" ? (
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
            ) : (
              <ResultZone text={`Объём топлива: ${result}л`} />
            )}
          </div>
        </>
      )}
      <BackButton />
    </>
  );
};

export default Calibration;
