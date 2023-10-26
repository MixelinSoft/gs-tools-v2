import gsDB from "../data/gsDB";

import { Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const SelectorGS = ({ changerId, param }) => {
  return (
    <Form>
      <Form.Group>
        <FloatingLabel label="Выберите АЗС:">
          <Form.Select
            defaultValue="empty"
            size="lg"
            onChange={(e) => changerId(e.target.value)}>
            <option value="empty" disabled>
              Нажмите для выбора
            </option>
            {gsDB.map((gs) =>
              gs[param] ? (
                <option
                  key={gs.gsId}
                  value={gs.gsId}>{`АЗС№${gs.gsNumber} ${gs.gsFirm}`}</option>
              ) : (
                ""
              )
            )}
          </Form.Select>
        </FloatingLabel>
      </Form.Group>
    </Form>
  );
};

export default SelectorGS;
