import styles from './SelectLocalization.module.css';

import { Button } from 'react-bootstrap';
import ModalInfo from './ModalInfo';

const SelectLocalization = ({ localizationHandler }) => {
  return (
    <ModalInfo
      fullscreen
      closeButton={false}
      className='modalHideBtn'
      headerText='Оберiть мову додатку'
      show
      bodyText={
        <div className={styles.buttonContainer}>
          <Button onClick={() => localizationHandler('ua')} variant='dark'>
            Українська
          </Button>
          <Button onClick={() => localizationHandler('ru')} variant='dark'>
            Русский
          </Button>
        </div>
      }
    />
  );
};

export default SelectLocalization;
