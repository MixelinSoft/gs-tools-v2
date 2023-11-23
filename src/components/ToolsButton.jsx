import styles from './ToolsButton.module.css';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ToolsButton = ({ tool, svg, lang }) => {
  return (
    <Link to={tool.toolSlug} className={styles.link}>
      <Button variant='light' className={styles.button}>
        {svg}
        {tool.toolTitle[lang]}
      </Button>
    </Link>
  );
};

export default ToolsButton;
