import { useState } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrDomain } from "react-icons/gr";
import { AiOutlineContacts, AiOutlineInfoCircle } from "react-icons/ai";
import styles from "./Menu.module.css";

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <HiOutlineMenuAlt1 onClick={handleShow} className={styles.menuButton} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Меню</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.menuBody}>
          <Link to="/" onClick={handleClose}>
            <GrDomain className={styles.menuItemIcon} />
            Главная
          </Link>

          <Link to="/contacts" onClick={handleClose}>
            {" "}
            <AiOutlineContacts className={styles.menuItemIcon} />
            Контакты
          </Link>

          <Link to="/about" onClick={handleClose}>
            <AiOutlineInfoCircle className={styles.menuItemIcon} />О приложении
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;
