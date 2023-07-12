import { Modal, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';

const MovieDetailModal = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Movie Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col md={3}>
              <img src={movie.Poster} className="img-fluid" alt="ini gambar cuy" />
            </Col>
            <Col md>
              <ListGroup>
                <ListGroup.Item>
                  <h4>
                    {movie.Title} ({movie.Year})
                  </h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Director: </strong> {movie.Director}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Actors: </strong> {movie.Actors}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Writer: </strong> {movie.Writer}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Plot: </strong> <br /> {movie.Plot}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieDetailModal;
