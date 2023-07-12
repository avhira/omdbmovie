const MovieDetailModal = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }

  return (
    <div className="modal fade" id="movieDetailModal" tabIndex="-1" aria-labelledby="movieDetailModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="movieDetailModalLabel">
              Movie Details
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <img src={movie.Poster} className="img-fluid" alt="ini gambar cuy" />
                </div>
                <div className="col-md">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <h4>
                        {movie.Title} ({movie.Year})
                      </h4>
                    </li>
                    <li className="list-group-item">
                      <strong>Director : </strong> {movie.Director}
                    </li>
                    <li className="list-group-item">
                      <strong>Actors : </strong> {movie.Actors}
                    </li>
                    <li className="list-group-item">
                      <strong>Writer : </strong> {movie.Writer}
                    </li>
                    <li className="list-group-item">
                      <strong>Plot : </strong> <br /> {movie.Plot}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
