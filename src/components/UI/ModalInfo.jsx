import styles from './ModalInfo.module.css';
import Modal from 'react-bootstrap/Modal';

const ModalInfo = ({
  headerText,
  bodyText,
  show,
  showToggler,
  svg = '',
  fullscreen = false,
  closeButton = true,
}) => {
  return (
    <Modal
      fullscreen={fullscreen}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      show={show}
      onHide={() => showToggler(false)}>
      <Modal.Header closeButton={closeButton}>
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
