import localization from '../../data/localization';

import styles from './GSCard.module.css';

import { AiFillIdcard, AiTwotonePhone, AiOutlineBarcode } from 'react-icons/ai';
import { BsGeoAltFill, BsFillSignpostFill } from 'react-icons/bs';
import { FaCopy, FaShareAlt } from 'react-icons/fa';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const GSCard = ({ gs }) => {
  let userSettingsLocalizaton = localStorage.getItem('language') || 'ua';
  const text =
    localization[userSettingsLocalizaton].tools.phoneBook.sharingText;

  console.log(text);
  const textToShare = `${gs.gsFirm} АЗС №${gs.gsNumber}

${gs.phone ? 'телефон: ' + gs.phone : ''}
${gs.address ? text.address + ': ' + gs.address : ''}${
    gs.linkToGm
      ? '\n\nGoogle ' +
        text.gmaps +
        ': \n' +
        'https://maps.app.goo.gl/' +
        gs.linkToGm
      : ''
  }

${text.linkToApp}:
https://gs-tools.netlify.app/
  `;

  const copy = () => {
    navigator.clipboard.writeText(textToShare);
  };
  const share = () => {
    if (navigator.share) {
      navigator.share({
        text: textToShare,
      });
    }
  };

  return !gs ? (
    ''
  ) : (
    <>
      <Card className={styles.card}>
        <Card.Header as='h2'>АЗС №{gs.gsNumber}</Card.Header>
        <Card.Body>
          <div className={styles.itemContainer}>
            <AiFillIdcard className={styles.icon} />
            {gs.firm === 'undefined' ? (
              <span>АЗС№{gs.gsNumber}</span>
            ) : (
              <span>
                {gs.gsFirm} АЗС№{gs.gsNumber}
              </span>
            )}
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
            ''
          )}

          {gs.zip ? (
            <div className={styles.itemContainer}>
              <AiOutlineBarcode className={styles.icon} />
              <address>{gs.zip}</address>
            </div>
          ) : (
            ''
          )}

          {gs.region ? (
            <div className={styles.itemContainer}>
              <BsFillSignpostFill className={styles.icon} />
              <address>{gs.region} р-н</address>
            </div>
          ) : (
            ''
          )}
          {gs.address ? (
            <div className={styles.itemContainer}>
              <BsGeoAltFill className={styles.icon} />
              <address>{gs.address}</address>
            </div>
          ) : (
            ''
          )}

          {gs.gps ? (
            <div>
              <iframe
                title={gs.address}
                src={`https://www.google.com/maps/embed?pb=${gs.gps}`}
                width='100%'
                height='100%'
                loading='lazy'></iframe>
            </div>
          ) : (
            ''
          )}
          <div className={styles.sharingContainer}>
            <Button
              className={styles.sharingButton}
              onClick={copy}
              variant='dark'>
              <FaCopy className={styles.sharingIcon} />
              {text.btnCopy}
            </Button>
            {navigator.share ? (
              <Button
                className={styles.sharingButton}
                onClick={share}
                variant='dark'>
                <FaShareAlt className={styles.sharingIcon} />
                {text.btnShare}
              </Button>
            ) : (
              ''
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default GSCard;
