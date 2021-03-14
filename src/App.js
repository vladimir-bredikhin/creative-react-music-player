import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import chillhop from './data';

const App = () => {
  const data = chillhop();
  console.log(data);

  return (
    <div>
      <Song />
      <Player />
    </div>
  );
};

export default App;
