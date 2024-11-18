import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/Alek901" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
}

export default Footer;
