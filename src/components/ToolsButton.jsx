import styles from "./ToolsButton.module.css";

import Button from "react-bootstrap/Button";
import { AiFillCalculator } from "react-icons/ai";
import { Link } from "react-router-dom";

const ToolsButton = ({ tool }) => {
  return (
    <Link to={tool.toolSlug} className={styles.link}>
      <Button variant="light" className={styles.button}>
        <AiFillCalculator />
        {tool.toolTitle}
      </Button>
    </Link>
  );
};

export default ToolsButton;
