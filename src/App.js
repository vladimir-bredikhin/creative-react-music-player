import { useEffect, useRef, useState } from 'react';
import Library from './components/Library';
import Nav from './components/Nav';
import Player from './components/Player';
import Song from './components/Song';
import chillhop from './data';

const App = () => {
  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [openLibrary, setOpenLibrary] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    currentSong.active = true;
    setSongs((prev) => prev.map((s) => ({ ...s, active: s === currentSong })));
  }, [currentSong]);

  const skipTrackHandler = (step) => {
    const currentSongIdx = songs.findIndex((s) => s.id === currentSong.id);
    const newSongIdx = (songs.length + currentSongIdx + step) % songs.length;
    setCurrentSong(songs[newSongIdx]);
  };

  return (
    <div>
      <Nav {...{ setOpenLibrary }} />
      <Song {...{ currentSong }} />
      <Player
        {...{
          currentSong,
          isPlaying,
          setIsPlaying,
          audioRef,
          skipTrackHandler,
        }}
      />
      <Library {...{ songs, setCurrentSong, openLibrary }} />
    </div>
  );
};

export default App;
