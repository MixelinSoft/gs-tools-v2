import { useState } from "react";
import Moment from "react-moment";
import "moment/locale/ru";
import ResultZone from "../ResultZone";
import BackButton from "../UI/BackButton";
import { Form, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import ScrollIntoView from "react-scroll-into-view";

const ExpirationDates = () => {
  const [manufacture, changeManufacture] = useState(new Date());
  const [term, changeTerm] = useState("");
  const [units, changeUnits] = useState("months");
  const [result, changeResult] = useState({
    result: 0,
    toDate: 0,
    isExpired: true,
  });

  const changeResultHandler = (result, toDate, isExpired) => {
    changeResult({ result, toDate, isExpired });
  };
  const changeTermHandler = (term) => {
    changeTerm(term);
  };

  const changeUnitsHandler = (units) => {
    changeUnits(units);
  };

  const changeManufactureHandler = (manufacture) => {
    changeManufacture(manufacture);
  };

  const calculate = (manufacture, term, units) => {
    const manufactureDate = new Date(manufacture);
    const now = new Date();
    let isExpired = false;

    if (units === "days") {
      manufactureDate.setDate(manufactureDate.getDate() + +term);
    } else if (units === "months") {
      manufactureDate.setMonth(manufactureDate.getMonth() + +term);
    } else if (units === "years") {
      manufactureDate.setFullYear(manufactureDate.getFullYear() + +term);
    }

    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    ).valueOf();
    const manufactureDateEx = new Date(
      manufactureDate.getFullYear(),
      manufactureDate.getMonth(),
      manufactureDate.getDate()
    ).valueOf();

    if (today > manufactureDateEx) {
      isExpired = true;
    } else {
      isExpired = false;
    }

    changeResultHandler(
      manufactureDate.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      manufactureDate.toISOString(),
      isExpired
    );
  };
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          calculate(manufacture, term, units);
        }}>
        <Form.Group>
          <Form.Label>Введите дату изготовления товара</Form.Label>
          <Form.Control
            onChange={(e) => changeManufactureHandler(e.target.value)}
            type="date"
            value={manufacture}
            placeholder="Нажмите для ввода"
            required
          />
          {/* <Form.Text className="text-muted">
            Введите вручную или нажмите на символ "календарь"
          </Form.Text> */}
          <br />
          <Form.Label>Введите срок годности товара</Form.Label>
          <InputGroup>
            {" "}
            <Form.Control
              onChange={(e) => changeTermHandler(e.target.value)}
              value={term}
              type="number"
              min="0"
              placeholder="Нажмите для ввода"
              required
            />
            <Form.Select
              value={units}
              onChange={(e) => changeUnitsHandler(e.target.value)}>
              <option value="days">Дней</option>
              <option value="months">Месяцев</option>
              <option value="years">Лет</option>
            </Form.Select>
          </InputGroup>
        </Form.Group>

        <br />
        <ScrollIntoView selector="#resultZone">
          <Button variant="dark" type="submit">
            Рассчитать!
          </Button>
        </ScrollIntoView>
      </Form>
      <BackButton />
      <div id="resultZone">
        {result.result === 0 ? (
          ""
        ) : !result.result ? (
          <ResultZone alert text="Ошибка! Некорректные данные!" />
        ) : result.isExpired ? (
          <ResultZone
            alert
            text={`Товар был просрочен ${result.result}`}
            children={
              <>
                Срок годности истёк <Moment to={result.toDate}></Moment>
              </>
            }
          />
        ) : result.result ? (
          <ResultZone
            children={
              <>
                Срок годности истекает <Moment to={result.toDate}></Moment>
              </>
            }
            text={`Товар годен до: ${result.result}`}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ExpirationDates;
