import styles from "./BackButton.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BackButton = () => {
  return (
    <Link to="../">
      <Button variant="dark" className={styles.button}>
        &#10094;
      </Button>
    </Link>
  );
};

export default BackButton;
