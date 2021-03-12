import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Player = () => {
  return (
    <div>
      <div className='player'>
        <div className='time-control'>
          <p>Start time</p>
          <input type='range' name='' id='' />
          <p>End Time</p>
        </div>
        <div className='play-control'>
          <FontAwesomeIcon className='skip-back' icon={faAngleLeft} size='2x' />
          <FontAwesomeIcon className='play' icon={faPlay} size='2x' />
          <FontAwesomeIcon
            className='skip-forward'
            icon={faAngleRight}
            size='2x'
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
