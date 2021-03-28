import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className='library'>
      <h2>Library</h2>
      <div className='songs'>
        {songs.map((song) => (
          <LibrarySong {...{ song, setCurrentSong }} key={song.id} />
        ))}
      </div>
    </div>
  );
};

export default Library;
