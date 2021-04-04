import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const INITIAL_TITLE = 'Creative React Music Player';

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  skipTrackHandler,
}) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    currentTimePct: 0,
  });

  useEffect(() => {
    let title;
    if (isPlaying) {
      audioRef.current.play();
      title = `${currentSong.name} by ${currentSong.artist}`;
    } else {
      audioRef.current.pause();
      title = INITIAL_TITLE;
    }

    document.title = title;
  }, [currentSong, isPlaying, audioRef]);

  const timeUpdateHandler = ({ target }) => {
    const { currentTime, duration } = target;
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      currentTimePct: Math.round((100 * currentTime) / duration) || 0,
    });
  };

  const getTime = (time) =>
    time
      ? Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
      : '0:00';

  const dragHandler = ({ target: { value: currentTime } }) => {
    setSongInfo(() => ({ ...songInfo, currentTime }));
    audioRef.current.currentTime = currentTime;
  };

  const { currentTime, duration, currentTimePct } = songInfo;
  const [fromColor, toColor] = currentSong?.color;
  return (
    <>
      <div className='player'>
        <div className='time-control'>
          <p>{getTime(currentTime)}</p>
          <div
            className='track'
            style={{
              background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
            }}
          >
            <input
              type='range'
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={dragHandler}
            />
            <div
              className='animate'
              style={{ transform: `translateX(${currentTimePct}%)` }}
            >
              {' '}
            </div>
          </div>
          <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className='play-control'>
          <FontAwesomeIcon
            onClick={() => skipTrackHandler(-1)}
            className='skip-back'
            icon={faAngleLeft}
            size='2x'
          />
          <FontAwesomeIcon
            onClick={() => setIsPlaying((prev) => !prev)}
            className='play'
            icon={isPlaying ? faPause : faPlay}
            size='2x'
          />
          <FontAwesomeIcon
            onClick={() => skipTrackHandler(1)}
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
          onEnded={() => skipTrackHandler(1)}
        ></audio>
      </div>
    </>
  );
};

export default Player;
