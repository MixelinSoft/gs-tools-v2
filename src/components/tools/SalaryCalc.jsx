import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ScrollIntoView from "react-scroll-into-view";
import ResultZone from "../ResultZone";
import BackButton from "../UI/BackButton";

const SalaryCalc = () => {
  const [hours, changeHours] = useState("");
  const [liters, changeLiters] = useState("");
  const [hoursPrice, changeHoursPrice] = useState("40.90");
  const [litersPrice, changeLitersPrice] = useState(0.12);
  const [result, changeResult] = useState(0);

  const changeHoursHandler = (newHours) => {
    changeHours(newHours);
  };
  const changeHoursPriceHandler = (newHoursPrice) => {
    changeHoursPrice(newHoursPrice);
  };
  const changeLitersHandler = (newLiters) => {
    changeLiters(newLiters);
  };
  const changeLitersPriceHandler = (newLiterPrice) => {
    changeLitersPrice(newLiterPrice);
  };
  const calculateSalary = () => {
    changeResult(hours * hoursPrice + liters * litersPrice);
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          calculateSalary();
          changeHoursHandler("");
          changeLiters("");
        }}>
        <Form.Group>
          <Form.Label>Введите количество отработанных часов:</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => changeHoursHandler(e.target.value)}
            value={hours}
            placeholder="Введите часы"
            required
          />
          <Form.Text className="text-muted">Например: 192</Form.Text>
          <br></br>

          <Form.Label> Введите цену одного часа:</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => changeHoursPriceHandler(e.target.value)}
            value={hoursPrice}
            required
          />
          <Form.Text className="text-muted">По умолчанию: 40.90 грн</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Введите колличество проданных литров:</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => changeLitersHandler(e.target.value)}
            value={liters}
            placeholder="Введите литры"
            required
          />
          <Form.Text className="text-muted">Например: 23000</Form.Text>
          <br></br>

          <Form.Label> Введите цену одного литра:</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => changeLitersPriceHandler(e.target.value)}
            value={litersPrice}
            required
          />
          <Form.Text className="text-muted">По умолчанию: 0,12 грн</Form.Text>
        </Form.Group>

        <ScrollIntoView selector="#resultZone">
          <Button variant="dark" type="submit">
            Рассчитать!
          </Button>
        </ScrollIntoView>
      </Form>

      <div id="resultZone">
        {result > 0 ? (
          <ResultZone text={`Ваша зарплата = ${Math.round(result)}грн`} />
        ) : result === 0 ? (
          <ResultZone invisible />
        ) : (
          <ResultZone alert text="Произошла ошибка!" />
        )}
      </div>
      <BackButton />
    </>
  );
};

export default SalaryCalc;
