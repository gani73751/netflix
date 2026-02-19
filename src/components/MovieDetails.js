import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../services/omdbApi';
import './MovieDetails.css';

/**
 * MovieDetails Component
 * Displays full movie details fetched from OMDb API
 */
const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError('');

      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message || 'Failed to load movie details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const handleBack = () => {
    navigate('/home');
  };

  if (loading) {
    return (
      <div className="movie-details-container">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading movie details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="movie-details-container">
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button onClick={handleBack} className="back-button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="movie-details-container">
        <div className="error-container">
          <p className="error-message">Movie not found</p>
          <button onClick={handleBack} className="back-button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-details-container">
      <button onClick={handleBack} className="back-button-top">
        ← Back to Home
      </button>

      <div className="movie-details-content">
        <div className="movie-details-poster">
          {movie.Poster !== 'N/A' ? (
            <img src={movie.Poster} alt={movie.Title} />
          ) : (
            <div className="poster-placeholder-large">
              <span>No Image Available</span>
            </div>
          )}
        </div>

        <div className="movie-details-info">
          <h1 className="movie-details-title">{movie.Title}</h1>
          
          <div className="movie-details-meta">
            <span className="movie-year">{movie.Year}</span>
            {movie.Rated && movie.Rated !== 'N/A' && (
              <span className="movie-rated">{movie.Rated}</span>
            )}
            {movie.Runtime && movie.Runtime !== 'N/A' && (
              <span className="movie-runtime">{movie.Runtime}</span>
            )}
          </div>

          {movie.Ratings && movie.Ratings.length > 0 && (
            <div className="movie-ratings">
              <h3>Ratings</h3>
              <div className="ratings-list">
                {movie.Ratings.map((rating, index) => (
                  <div key={index} className="rating-item">
                    <span className="rating-source">{rating.Source}:</span>
                    <span className="rating-value">{rating.Value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {movie.Genre && movie.Genre !== 'N/A' && (
            <div className="movie-genre">
              <h3>Genre</h3>
              <p>{movie.Genre}</p>
            </div>
          )}

          {movie.Plot && movie.Plot !== 'N/A' && (
            <div className="movie-plot">
              <h3>Plot</h3>
              <p>{movie.Plot}</p>
            </div>
          )}

          {movie.Actors && movie.Actors !== 'N/A' && (
            <div className="movie-actors">
              <h3>Cast</h3>
              <p>{movie.Actors}</p>
            </div>
          )}

          {movie.Director && movie.Director !== 'N/A' && (
            <div className="movie-director">
              <h3>Director</h3>
              <p>{movie.Director}</p>
            </div>
          )}

          {movie.Writer && movie.Writer !== 'N/A' && (
            <div className="movie-writer">
              <h3>Writer</h3>
              <p>{movie.Writer}</p>
            </div>
          )}

          {movie.Awards && movie.Awards !== 'N/A' && (
            <div className="movie-awards">
              <h3>Awards</h3>
              <p>{movie.Awards}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
