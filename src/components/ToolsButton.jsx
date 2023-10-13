import styles from "./ToolsButton.module.css";

import Button from "react-bootstrap/Button";
import { AiFillCalculator } from "react-icons/ai";
import { Link } from "react-router-dom";

const ToolsButton = ({ tool, svg }) => {
  return (
    <Link to={tool.toolSlug} className={styles.link}>
      <Button variant="light" className={styles.button}>
        {svg}
        {tool.toolTitle}
      </Button>
    </Link>
  );
};

export default ToolsButton;
