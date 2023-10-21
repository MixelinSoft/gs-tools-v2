import styles from "./BackButton.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  return (
    <Link to="../">
      <IoIosArrowBack className={styles.button} />
      {/* <Button variant="dark" className={styles.button}>
        &#10094;
      </Button> */}
    </Link>
  );
};

export default BackButton;
