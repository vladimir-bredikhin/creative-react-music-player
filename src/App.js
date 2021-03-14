import { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import chillhop from './data';
import './styles/app.scss';

const App = () => {
  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
};

export default App;
