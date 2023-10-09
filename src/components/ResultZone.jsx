import styles from "./ResultZone.module.css";
import { Alert } from "react-bootstrap";

const ResultZone = ({ text, alert, invisible }) => {
  return (
    <div className={styles.resultZoneContainer}>
      {!invisible ? (
        <Alert
          className={styles.alert}
          variant={alert ? "danger" : "secondary"}>
          {text}
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultZone;
