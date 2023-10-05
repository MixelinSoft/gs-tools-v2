import styles from "./Toolbox.module.css";
import ToolsButton from "./ToolsButton";

import Container from "react-bootstrap/Container";
import tools from "../utils/tools";

const Toolbox = () => {
  return (
    <Container className={styles.toolboxContainer}>
      {tools.map((tool) => (
        <ToolsButton className={styles.tool} tool={tool} key={tool.toolID} />
      ))}
    </Container>
  );
};

export default Toolbox;
