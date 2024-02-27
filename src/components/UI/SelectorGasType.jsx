import { Form } from 'react-bootstrap';
import tables from '../../data/CALIBRATION_TABLES';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const SelectorGasType = ({ changeTypeGSHandler, typeGS, selectedGS, lang }) => {
  return (
    <>
      <FloatingLabel label={lang.label_1}>
        <Form.Select
          defaultValue='empty'
          onChange={(e) => {
            changeTypeGSHandler(e.target.value);
          }}>
          <option value={typeGS} disabled>
            {lang.select_1}
          </option>
          {Object.keys(tables[selectedGS.gsId]).map((gasType) => (
            <option
              value={gasType}
              key={tables[selectedGS.gsId][gasType].tankId}>
              {`${tables[selectedGS.gsId][gasType].tankId}. ${
                tables[selectedGS.gsId][gasType].type
              }`}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </>
  );
};

export default SelectorGasType;
