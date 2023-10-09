import gsDB from "../../data/gsDB";

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ScrollIntoView from "react-scroll-into-view";
import ResultZone from "../ResultZone";
import SelectorGS from "../SelectorGS";

const Calibration = () => {
  const [gsId, changeGsId] = useState("empty");
  const [typeGS, changeTypeGS] = useState("empty");
  const [height, changeHeight] = useState("");
  const [result, changeResult] = useState(0);
  const changeTypeGSHandler = (type) => {
    changeTypeGS(type);
    changeResult(0);
  };
  const changeHeightHandler = (height) => {
    changeHeight(height);
  };

  const changeGsIdHandler = (id) => {
    changeGsId(id);
  };

  const [selectedGS] = gsDB.filter((gs) => gs.gsId === gsId);

  const autoCalibrate = (height, tank) => {
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

    return Math.round(tank.capacityTable[levelLow] + tank.tube + tail);
  };

  const calculate = (height, tank) => {
    changeResult(
      autoCalibrate(+height.replace(",", "."), selectedGS.tables[tank])
    );
  };
  return (
    <>
      <SelectorGS param={"tables"} changerId={changeGsIdHandler} />
      {gsId === "empty" ? (
        ""
      ) : (
        <>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              calculate(height, typeGS);
            }}>
            <Form.Group>
              <Form.Label>Выберите вид топлива</Form.Label>
              <Form.Select
                defaultValue="empty"
                onChange={(e) => changeTypeGSHandler(e.target.value)}>
                <option value={typeGS} disabled>
                  Нажмите для выбора типа топлива
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
              <Form.Label>Введите высоту топлива с метрштока в СМ</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => changeHeightHandler(e.target.value)}
                value={height}
                placeholder="Нажмите для ввода"
                required
              />
              <Form.Text className="text-muted">Например 123.4</Form.Text>
            </Form.Group>
            <br></br>
            {height !== 0 && typeGS !== "empty" ? (
              <ScrollIntoView selector="#resultZone">
                <Button variant="dark" type="submit">
                  Рассчитать!
                </Button>
              </ScrollIntoView>
            ) : (
              ""
            )}
          </Form>
          <div id="resultZone">
            {result === 0 ? (
              ""
            ) : !result ? (
              <ResultZone alert text="Ошибка, некорректные данные!" />
            ) : result <= selectedGS.tables[typeGS].minCapcity ? (
              <ResultZone
                alert
                text={`Внимание! Объём топлива ниже мёртвого остатка - ${selectedGS.tables[typeGS].minCapcity}л. Объём топлива = ${result}л.`}
              />
            ) : (
              <ResultZone text={`Объём топлива = ${result}л.`} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Calibration;
