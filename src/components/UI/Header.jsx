import styles from "./Header.module.css";
import Logo from "../../images/logo_mobile30px.png";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar className={`bg-light ${styles.navbar}`}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              alt=""
              src={Logo}
              width="150"
              height="30"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
