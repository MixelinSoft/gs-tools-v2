import styles from "./GSCard.module.css";

import { AiFillIdcard, AiTwotonePhone } from "react-icons/ai";
import { BsGeoAltFill } from "react-icons/bs";

import Card from "react-bootstrap/Card";

const GSCard = ({ gs }) => {
  console.log(gs);
  return !gs ? (
    ""
  ) : (
    <>
      <Card className={styles.card}>
        <Card.Header as="h2">АЗС №{gs.gsNumber}</Card.Header>
        <Card.Body>
          <div className={styles.itemContainer}>
            <AiFillIdcard className={styles.icon} />
            <span>
              ТОВ "{gs.gsFirm}", АЗС№{gs.gsNumber}
            </span>
          </div>
          {gs.phone ? (
            <div className={styles.itemContainer}>
              <AiTwotonePhone className={styles.icon} />
              <a
                className={styles.phoneLink}
                href={`tel:${gs.phone}`}>{`${gs.phone.substr(
                0,
                3
              )} (${gs.phone.substr(3, 3)}) ${gs.phone.substr(
                6,
                3
              )}-${gs.phone.substr(9, 2)}-${gs.phone.substr(11, 2)}`}</a>
            </div>
          ) : (
            ""
          )}
          {gs.address ? (
            <div className={styles.itemContainer}>
              <BsGeoAltFill className={styles.icon} />
              <address>{gs.address}</address>
            </div>
          ) : (
            ""
          )}
          {gs.gps ? (
            <div>
              <iframe
                src={gs.gps}
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default GSCard;
