import { useEffect, useState } from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Song from './components/Song';
import chillhop from './data';

const App = () => {
  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    currentSong.active = true;
    setSongs((prev) => prev.map((s) => ({ ...s, active: s === currentSong })));
  }, [currentSong]);

  return (
    <div>
      <Song {...{ currentSong }} />
      <Player {...{ currentSong, isPlaying, setIsPlaying }} />
      <Library {...{ songs, setCurrentSong }} />
    </div>
  );
};

export default App;
