import styles from './Header.module.css';
// import Logo from '../../images/logo_mobile30pxNY.png';
import Logo from '../../images/logo_mobile30px.png';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Menu from './Menu';

const Header = ({ localization }) => {
  return (
    <Navbar className={`bg-light ${styles.navbar}`}>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img
              alt=''
              src={Logo}
              width='150'
              height='30'
              className='d-inline-block align-top logo'
            />
          </Link>
        </Navbar.Brand>
        <Menu localization={localization} />
      </Container>
    </Navbar>
  );
};

export default Header;
