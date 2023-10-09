import { useState } from "react";
import gsDB from "../data/gsDB";

import { Button, Form } from "react-bootstrap";

const SelectorGS = ({ selectedGS, param }) => {
  const [selected, selectedChange] = useState("empty");
  const [hidden, hiddenChange] = useState(false);

  const hiddenChangeHandler = () => {
    hiddenChange(!hidden);
  };
  const selectGsHandler = (gs) => {
    selectedChange(gs);
  };

  return (
    <Form
      hidden={hidden}
      onSubmit={(e) => {
        e.preventDefault();
        selectedGS.gsId = selected;
        hiddenChangeHandler();
      }}>
      <Form.Group>
        <Form.Label>Выберите АЗС:</Form.Label>
        <Form.Select
          size="lg"
          onChange={(e) => selectGsHandler(e.target.value)}>
          <option value={false} selected disabled>
            Нажмите для выбора
          </option>
          {gsDB.map((gs) => {
            if (gs[param]) {
              return (
                <option
                  key={gs.gsId}
                  value={
                    gs.gsId
                  }>{`АЗС№${gs.gsNumber} ТОВ "${gs.gsFirm}"`}</option>
              );
            }
          })}
        </Form.Select>
      </Form.Group>
      <br></br>
      {selected !== "empty" ? (
        <Button variant="dark" type="submit">
          Подтвердить выбор
        </Button>
      ) : (
        ""
      )}
    </Form>
  );
};

export default SelectorGS;
