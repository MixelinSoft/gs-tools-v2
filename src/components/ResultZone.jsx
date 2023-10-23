import styles from "./ResultZone.module.css";
import { Alert } from "react-bootstrap";

const ResultZone = ({ text, alert, invisible, children = "" }) => {
  return (
    <div className={styles.resultZoneContainer}>
      {!invisible ? (
        <Alert
          className={styles.alert}
          variant={alert ? "danger" : "secondary"}>
          {text}
          <br />
          {children}
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultZone;
