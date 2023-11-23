import styles from './About.module.css';
import tools from '../utils/tools';

import BackButton from './UI/BackButton';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import { Link } from 'react-router-dom';

const packageJson = require('../../package.json');

// console.log(packageJson);
const About = ({ localization }) => {
  return (
    <Container className='infoContainer'>
      <BackButton />
      <h1>{localization.title}</h1>
      <h2>GS-Tools v{packageJson.version}</h2>
      <h5>{localization.text}</h5>
      {tools.map((tool) => {
        return (
          <Link to={`/${tool.toolSlug}`} key={tool.toolID}>
            <Alert variant='dark'>
              <Alert.Heading className={styles.toolHeading}>
                <span className={styles.svg}>{tool.icon}</span>
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
