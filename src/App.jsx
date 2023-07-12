import { useState } from 'react';
import MovieCard from './components/MovieCard';
import MovieDetailModal from './components/MovieDetailModal';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [keyword, setKeyword] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=dca61bcc&s=${keyword}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      if (data.Response === 'False') {
        throw new Error(data.Error);
      }
      setMovies(data.Search);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const handleShowDetails = async (imdbid) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=dca61bcc&i=${imdbid}`);
      const data = await response.json();
      setSelectedMovie(data);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const renderMovieCards = () => {
    return movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} onShowDetails={handleShowDetails} />);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>AVHIRA Movies Db</h1>
        </div>
      </div>

      {/* SEARCH */}
      <div className="row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input type="text" className="form-control input-keyword" placeholder="Search Movie . . ." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <button className="btn btn-primary search-btn" type="button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      {/* SEARCH finish */}

      {/* CARD */}
      <div className="row movie-container">{renderMovieCards()}</div>
      {/* CARD finish */}

      <MovieDetailModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}

export default App;
