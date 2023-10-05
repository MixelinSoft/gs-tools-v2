import styles from "./ResultZone.module.css";
import { Alert } from "react-bootstrap";

const ResultZone = ({ text, alert }) => {
  return (
    <>
      <Alert className={styles.alert} variant={alert ? "danger" : "secondary"}>
        {text}
      </Alert>
    </>
  );
};

export default ResultZone;
