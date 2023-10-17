import styles from "./Contacts.module.css";
import BackButton from "./UI/BackButton";
import Alert from "react-bootstrap/Alert";
import { Container } from "react-bootstrap";
import { MdAlternateEmail } from "react-icons/md";
import { FaViber, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <Container className="infoContainer">
      <BackButton />
      <h1>Контакты</h1>
      <p>
        Все вопросы и предложения, касающиеся приложения GS-Tools, сообщения об
        ошибках и багах вы можете отправлять на электронную почту разработчика,
        или в официальных сообществах приложения в мессенджерах Telegram и
        Viber. Буду рад обратной связи!
      </p>
      <div className={styles.contactsLinks}>
        <Link to="mailto:mixelinsoft@gmail.com">
          <Alert variant="dark" className={styles.contactItem}>
            <MdAlternateEmail className={styles.contactIcon} />
            Email - Написать письмо разработчику
          </Alert>
        </Link>
        <Link to="https://t.me/+1LoPa_GdtfliYjIy">
          <Alert variant="dark" className={styles.contactItem}>
            <FaTelegram className={styles.contactIcon} />
            Telegram - Подписаться на канал
          </Alert>
        </Link>
        <Link to="https://invite.viber.com/?g2=AQB2iYdBkj9KclHPQRIoFs6acUTALmZSCUhy592jnLt4Y4fx2ZceeguzTupQwuZP">
          <Alert variant="dark" className={styles.contactItem}>
            <FaViber className={styles.contactIcon} />
            Viber - Подписаться на канал
          </Alert>
        </Link>
      </div>
    </Container>
  );
};

export default Contacts;
