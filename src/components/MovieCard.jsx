const MovieCard = ({ movie, onShowDetails }) => {
  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <img src={movie.Poster} alt="ini film" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{movie.Year}</h6>
          <button className="btn btn-primary modal-detail-btn" data-bs-toggle="modal" data-bs-target="#movieDetailModal" onClick={() => onShowDetails(movie.imdbID)}>
            show details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
