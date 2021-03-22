import { useState } from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Song from './components/Song';
import chillhop from './data';

const App = () => {
  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player {...{ currentSong, isPlaying, setIsPlaying }} />
      <Library songs={songs} />
    </div>
  );
};

export default App;
