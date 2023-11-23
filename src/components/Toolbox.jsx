import styles from './Toolbox.module.css';
import ToolsButton from './ToolsButton';

import Container from 'react-bootstrap/Container';
import tools from '../utils/tools';
import { useEffect } from 'react';

const Toolbox = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container className={styles.toolboxContainer}>
      {tools.map((tool) => (
        <ToolsButton
          className={styles.tool}
          tool={tool}
          key={tool.toolID}
          svg={tool.icon}
          lang={lang}
        />
      ))}
    </Container>
  );
};

export default Toolbox;
