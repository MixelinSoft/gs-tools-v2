import gsDB from '../data/GAS-STATION_DB';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const SelectorGS = ({ changerId, param, lang }) => {
  return (
    <FloatingLabel label={lang.label_1}>
      <Form.Select
        defaultValue='empty'
        size='lg'
        onChange={(e) => changerId(e.target.value)}>
        <option value='empty' disabled>
          {lang.select_1}
        </option>
        {gsDB.map((gs) =>
          gs[param] ? (
            <option
              key={gs.gsId}
              value={gs.gsId}>{`АЗС№${gs.gsNumber} ${gs.gsFirm}`}</option>
          ) : (
            ''
          )
        )}
      </Form.Select>
    </FloatingLabel>
  );
};

export default SelectorGS;
