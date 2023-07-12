import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './components/MovieCard';
import MovieDetailModal from './components/MovieDetailModal';
import { Button, Container, Col, Row, FormControl, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [keyword, setKeyword] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=dca61bcc&s=${keyword}`);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.Response === 'False') {
        throw new Error(data.Error);
      }
      setMovies(data.Search);
    } catch (error) {
      if (error instanceof TypeError) {
        console.log('Network error:', error);
        alert('Network error. Please check your internet connection.');
      } else {
        console.log('Error:', error);
        alert('An error occurred. Please try again.');
      }
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
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>AVHIRA Movies Db</h1>
        </Col>
      </Row>

      {/* SEARCH */}
      <Row>
        <Col md={8}>
          <InputGroup className="mb-3">
            <FormControl type="text" placeholder="Search Movie . . ." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      {/* SEARCH finish */}

      {/* CARD */}
      <Row className="movie-container">{renderMovieCards()}</Row>
      {/* CARD finish */}

      <MovieDetailModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </Container>
  );
}

export default App;
