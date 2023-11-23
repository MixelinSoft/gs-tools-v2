import styles from './ModalInfo.module.css';
import Modal from 'react-bootstrap/Modal';

const ModalInfo = ({
  headerText,
  bodyText,
  show,
  showToggler,
  svg = '',
  hideCloseBtn = true,
}) => {
  return (
    <Modal
      closeButton={hideCloseBtn}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      show={show}
      onHide={() => showToggler(false)}>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <span className={styles.svg}>{svg}</span>
          {headerText}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyText}</Modal.Body>
    </Modal>
  );
};

export default ModalInfo;
