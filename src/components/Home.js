import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../services/omdbApi';
import MovieCard from './MovieCard';
import './Home.css';

/**
 * Home Component (Dashboard)
 * Netflix-style home page with movie search and grid display
 */
const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  // Get current user from LocalStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
  }, []);

  // Debounced search function
  const performSearch = useCallback(async (query) => {
    if (!query.trim()) {
      setMovies([]);
      setError('');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const results = await searchMovies(query);
      setMovies(results.movies);
    } catch (err) {
      setError(err.message || 'Failed to search movies. Please try again.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Handle search input with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchQuery);
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [searchQuery, performSearch]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  // Handle movie card click
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <h1 className="logo" onClick={() => navigate('/home')}>
              NETFLIX
            </h1>
          </div>
          <div className="navbar-center">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {loading && <div className="search-loader"></div>}
            </div>
          </div>
          <div className="navbar-right">
            <span className="user-name">
              {currentUser?.name || 'User'}
            </span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {error && (
          <div className="error-container">
            <p className="error-message">{error}</p>
          </div>
        )}

        {loading && movies.length === 0 && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Searching movies...</p>
          </div>
        )}

        {!loading && searchQuery && movies.length === 0 && !error && (
          <div className="empty-state">
            <p>No movies found. Try a different search term.</p>
          </div>
        )}

        {!searchQuery && (
          <div className="welcome-section">
            <h2>Welcome, {currentUser?.name || 'User'}!</h2>
            <p>Start searching for your favorite movies above.</p>
          </div>
        )}

        {movies.length > 0 && (
          <div className="movies-section">
            <h2 className="section-title">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Movies'}
            </h2>
            <div className="movies-grid">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  onClick={() => handleMovieClick(movie.imdbID)}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
