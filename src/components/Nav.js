import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = ({ setOpenLibrary }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setOpenLibrary((prev) => !prev)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
