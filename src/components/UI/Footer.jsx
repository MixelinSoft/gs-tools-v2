import styles from './Footer.module.css';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Navbar className={`${styles.footer} bg-light notranslate`} translate='no'>
      ©MixelinSoft 2023-{year}
    </Navbar>
  );
};

export default Footer;
