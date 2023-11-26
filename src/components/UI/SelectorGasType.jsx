import { Form } from 'react-bootstrap';
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
          {Object.keys(selectedGS.tables).map((gasType) => (
            <option value={gasType} key={selectedGS.tables[gasType].tankId}>
              {`${selectedGS.tables[gasType].tankId}. ${selectedGS.tables[gasType].type}`}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </>
  );
};

export default SelectorGasType;
