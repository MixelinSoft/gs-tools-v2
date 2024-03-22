import Form from 'react-bootstrap/Form';
import styles from './SearchGS.module.css';

const SearchGS = (props) => {
  return (
    <Form.Control
      className={styles.inputText}
      size='lg'
      type='text'
      placeholder={props.placeholder.inputPlaceholder_1}
      value={props.value}
      onChange={props.onChange}
      required
    />
  );
};

export default SearchGS;
