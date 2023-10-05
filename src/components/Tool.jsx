import styles from "./Tool.module.css";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import tools from "../utils/tools";

const Tool = () => {
  const toolSlug = useParams().slug.toString();
  const selectedTool = tools.find((tool) => toolSlug === tool.toolSlug);
  return (
    <Container className={styles.toolContainer}>
      <h2>{selectedTool.toolTitle}</h2>
      <p>v{selectedTool.toolVersion}</p>
      {selectedTool.tool()}
    </Container>
  );
};

export default Tool;
