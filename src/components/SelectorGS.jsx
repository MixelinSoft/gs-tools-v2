import { useState } from "react";
import gsDB from "../data/gsDB";

import { Form } from "react-bootstrap";

const SelectorGS = ({ changerId, param }) => {
  const [hidden, hiddenChange] = useState(false);

  const hiddenChangeHandler = () => {
    hiddenChange(!hidden);
  };

  return (
    <Form hidden={hidden}>
      <Form.Group>
        <Form.Label>Выберите АЗС:</Form.Label>
        <Form.Select
          defaultValue="empty"
          size="lg"
          onChange={(e) => changerId(e.target.value)}>
          <option value="empty" disabled>
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
    </Form>
  );
};

export default SelectorGS;
