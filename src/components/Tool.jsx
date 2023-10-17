import styles from "./Tool.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import tools from "../utils/tools";
import ModalInfo from "./UI/ModalInfo";

const Tool = () => {
  const toolSlug = useParams().slug.toString();
  const selectedTool = tools.find((tool) => toolSlug === tool.toolSlug);
  const [modalShowState, setModalShowState] = useState(false);
  const setModalShowHandler = (show) => {
    setModalShowState(show);
  };

  return (
    <Container className={styles.toolContainer}>
      <ModalInfo
        show={modalShowState}
        showToggler={setModalShowState}
        headerText={selectedTool.toolTitle + " v" + selectedTool.toolVersion}
        bodyText={selectedTool.toolDescription}
      />
      <h2 onClick={() => setModalShowHandler(!modalShowState)}>
        {selectedTool.toolTitle}
      </h2>

      {selectedTool.tool()}
    </Container>
  );
};

export default Tool;
