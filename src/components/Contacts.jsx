import styles from './Contacts.module.css';
import BackButton from './UI/BackButton';
import Alert from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';
import { MdAlternateEmail } from 'react-icons/md';
import { FaViber, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contacts = ({ localization }) => {
  return (
    <Container className='infoContainer'>
      <BackButton />
      <h1>{localization.title}</h1>
      <p>{localization.text}</p>
      <div className={styles.contactsLinks}>
        <Link to='mailto:mixelinsoft@gmail.com'>
          <Alert variant='dark' className={styles.contactItem}>
            <MdAlternateEmail className={styles.contactIcon} />
            {localization.email}
          </Alert>
        </Link>
        <Link to='https://t.me/+1LoPa_GdtfliYjIy'>
          <Alert variant='dark' className={styles.contactItem}>
            <FaTelegram className={styles.contactIcon} />
            {localization.telegram}
          </Alert>
        </Link>
        <Link to='https://invite.viber.com/?g2=AQB2iYdBkj9KclHPQRIoFs6acUTALmZSCUhy592jnLt4Y4fx2ZceeguzTupQwuZP'>
          <Alert variant='dark' className={styles.contactItem}>
            <FaViber className={styles.contactIcon} />
            {localization.viber}
          </Alert>
        </Link>
      </div>
    </Container>
  );
};

export default Contacts;
