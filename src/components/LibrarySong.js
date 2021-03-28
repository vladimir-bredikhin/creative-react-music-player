const LibrarySong = ({ song, setCurrentSong }) => {
  const { cover, name, artist } = song;

  return (
    <div className='song' onClick={() => setCurrentSong(song)}>
      <img src={cover} alt={name} />
      <div className='description'>
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
