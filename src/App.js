import { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import chillhop from './data';
import './styles/app.scss';

const App = () => {
  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player {...{ currentSong, isPlaying, setIsPlaying }} />
    </div>
  );
};

export default App;
