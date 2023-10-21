import { useState } from "react";
import ResultZone from "../ResultZone";
import BackButton from "../UI/BackButton";
import { Form, Button } from "react-bootstrap";

const ExpirationDates = () => {
  const [manufacture, changeManufacture] = useState(new Date());
  const [term, changeTerm] = useState("");
  const [units, changeUnits] = useState("months");
  const [result, changeResult] = useState({ result: 0, toDate: 0 });

  const changeResultHandler = (result, toDate) => {
    changeResult({ result, toDate });
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
    // const toDate = new Date();

    if (units === "days") {
      manufactureDate.setDate(manufactureDate.getDate() + +term);
    } else if (units === "months") {
      manufactureDate.setMonth(manufactureDate.getMonth() + +term);
    } else if (units === "years") {
      manufactureDate.setFullYear(manufactureDate.getFullYear() + +term);
    }

    changeResultHandler(
      manufactureDate.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      // toDate.toLocaleDateString(undefined, {
      //   year: "numeric",
      //   month: "long",
      //   day: "numeric",
      // })
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
          <Form.Text className="text-muted">
            Введите вручную или нажмите на символ "календарь"
          </Form.Text>
          <br />
          <Form.Label>Введите срок годности товара</Form.Label>
          <Form.Control
            onChange={(e) => changeTermHandler(e.target.value)}
            value={term}
            type="number"
            min="0"
            placeholder="Нажмите для ввода"
            required
          />
          <Form.Label>Выберите еденицу измерения</Form.Label>
          <Form.Select
            value={units}
            onChange={(e) => changeUnitsHandler(e.target.value)}>
            <option value="days">Дней</option>
            <option value="months">Месяцев</option>
            <option value="years">Лет</option>
          </Form.Select>
        </Form.Group>
        <br />
        <Button variant="dark" type="submit">
          Рассчитать!
        </Button>
      </Form>
      <BackButton />
      <div id="resultZone">
        {result.result === 0 ? (
          ""
        ) : !result.result ? (
          <ResultZone alert text="Ошибка! Некорректные данные!" />
        ) : (
          <ResultZone text={`Товар годен до: ${result.result}`} />
        )}
      </div>
    </>
  );
};

export default ExpirationDates;
