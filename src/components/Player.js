import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef }) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying, audioRef]);

  const timeUpdateHandler = ({ target }) => {
    const { currentTime, duration } = target;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const getTime = (time) =>
    time
      ? Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
      : '0:00';

  const dragHandler = ({ target: { value: currentTime } }) => {
    setSongInfo({ ...songInfo, currentTime });
    audioRef.current.currentTime = currentTime;
  };

  return (
    <>
      <div className='player'>
        <div className='time-control'>
          <p>{getTime(songInfo.currentTime)}</p>
          <input
            type='range'
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className='play-control'>
          <FontAwesomeIcon className='skip-back' icon={faAngleLeft} size='2x' />
          <FontAwesomeIcon
            onClick={() => setIsPlaying((prev) => !prev)}
            className='play'
            icon={isPlaying ? faPause : faPlay}
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
