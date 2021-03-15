import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

  const audioRef = useRef(null);
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = ({ target }) => {
    const { currentTime, duration } = target;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const getTime = (time) =>
    Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);

  return (
    <>
      <div className='player'>
        <div className='time-control'>
          <p>{getTime(songInfo.currentTime)}</p>
          <input type='range' />
          <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className='play-control'>
          <FontAwesomeIcon className='skip-back' icon={faAngleLeft} size='2x' />
          <FontAwesomeIcon
            onClick={playSongHandler}
            className='play'
            icon={faPlay}
            size='2x'
          />
          <FontAwesomeIcon
            className='skip-forward'
            icon={faAngleRight}
            size='2x'
          />
        </div>
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onLoadedMetadata={timeUpdateHandler}
          onTimeUpdate={timeUpdateHandler}
        ></audio>
      </div>
    </>
  );
};

export default Player;
