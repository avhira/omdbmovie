import { Card, Button } from 'react-bootstrap';

const MovieCard = ({ movie, onShowDetails }) => {
  return (
    <div className="col-md-4 my-3">
      <Card>
        <Card.Img src={movie.Poster} alt="ini film" className="card-img-top" />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{movie.Year}</Card.Subtitle>
          <Button variant="primary" className="modal-detail-btn" data-bs-toggle="modal" data-bs-target="#movieDetailModal" onClick={() => onShowDetails(movie.imdbID)}>
            show details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
