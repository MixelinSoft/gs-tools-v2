import styles from './Footer.module.css';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar className={`${styles.footer} bg-light`}>
      ©MixelinSoft 2023-2024
    </Navbar>
  );
};

export default Footer;
