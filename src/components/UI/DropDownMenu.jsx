import styles from "./DropDownMenu.module.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <DropdownButton
      variant="dark"
      title="Меню"
      menuVariant="dark"
      drop="start"
      className={styles.button}>
      <Dropdown.Item eventKey="1">
        <Link to="/" className={styles.link}>
          Главная
        </Link>
      </Dropdown.Item>
      <Dropdown.Item eventKey="2">Контакты</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="3">Сообщить об ошибке</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDownMenu;
