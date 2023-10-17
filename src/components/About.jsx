import styles from "./About.module.css";
import tools from "../utils/tools";

import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container className="infoContainer">
      <h1>О приложении</h1>
      <h2>GS-Tools v2.1.0</h2>
      <h5>
        Приложение GS-Tools разработано для решения повседневных задач
        работников АЗС. На данный момент в приложении имеются такие утилиты:
      </h5>
      {tools.map((tool) => {
        return (
          <Link to={`/${tool.toolSlug}`}>
            <Alert variant="dark">
              <Alert.Heading className={styles.toolHeading}>
                {tool.svgIcon}
                <span className={styles.toolTitle}>{tool.toolTitle}</span>
                <p className={styles.toolVersion}> v{tool.toolVersion}</p>
              </Alert.Heading>
              <hr />
              <p className={styles.toolDescription}>{tool.toolDescription}</p>
            </Alert>
          </Link>
        );
      })}
    </Container>
  );
};

export default About;
