import styles from './Footer.module.css';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar className={`${styles.footer} bg-light notranslate`} translate='no'>
      ©MixelinSoft 2023-2024
    </Navbar>
  );
};

export default Footer;
