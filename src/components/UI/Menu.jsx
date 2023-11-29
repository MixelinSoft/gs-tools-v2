import { useState } from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { GrDomain } from 'react-icons/gr';
import { AiOutlineContacts, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdOutlineSettings } from 'react-icons/md';
import styles from './Menu.module.css';

function Menu({ localization }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <HiOutlineMenuAlt1 onClick={handleShow} className={styles.menuButton} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{localization.menu.burger.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.menuBody}>
          <Link to='/' onClick={handleClose}>
            <GrDomain className={styles.menuItemIcon} />
            {localization.menu.burger.mainPage}
          </Link>

          <Link to='/settings' onClick={handleClose}>
            {' '}
            <MdOutlineSettings className={styles.menuItemIcon} />
            {localization.menu.burger.settings}
          </Link>

          <Link to='/contacts' onClick={handleClose}>
            {' '}
            <AiOutlineContacts className={styles.menuItemIcon} />
            {localization.menu.burger.contacts}
          </Link>

          <Link to='/about' onClick={handleClose}>
            <AiOutlineInfoCircle className={styles.menuItemIcon} />
            {localization.menu.burger.about}
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;
