import React from 'react';
import './MovieCard.css';

/**
 * MovieCard Component
 * Displays a single movie card with poster, title, and year
 */
const MovieCard = ({ movie, onClick }) => {
  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-poster.png';
  
  return (
    <div className="movie-card" onClick={onClick}>
      <div className="movie-card-poster">
        {movie.Poster !== 'N/A' ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="poster-placeholder">
            <span>No Image</span>
          </div>
        )}
        <div className="movie-card-overlay">
          <div className="movie-card-info">
            <h3 className="movie-card-title">{movie.Title}</h3>
            <p className="movie-card-year">{movie.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
