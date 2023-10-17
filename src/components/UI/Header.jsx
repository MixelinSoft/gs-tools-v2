import styles from "./Header.module.css";
import Logo from "../../images/logo_mobile30px.png";
import Navbar from "react-bootstrap/Navbar";
import { GrDomain } from "react-icons/gr";
// import { BiCoin } from "react-icons/bi";
import { AiOutlineContacts, AiOutlineInfoCircle } from "react-icons/ai";
import { NavDropdown } from "react-bootstrap";
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
              className="d-inline-block align-top logo"
            />
          </Link>
        </Navbar.Brand>

        <NavDropdown title="Меню" id="nav-dropdown" drop="start">
          <NavDropdown.Item>
            <Link to="/">
              <GrDomain />
              Главная
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/contacts">
              {" "}
              <AiOutlineContacts />
              Контакты
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/about">
              <AiOutlineInfoCircle />О приложении
            </Link>
          </NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          {/* <NavDropdown.Item>
            <Link to="/contacts">
              <BiCoin />
              Поддержать проект
            </Link>
          </NavDropdown.Item> */}
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
