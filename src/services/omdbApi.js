/**
 * OMDb API Service
 * Handles all API calls to OMDb API for movie search and details
 */

const API_KEY = '1084abb1';
const BASE_URL = 'https://www.omdbapi.com/';

/**
 * Search movies by title
 * @param {string} searchText - Movie title to search
 * @param {number} page - Page number for pagination (optional)
 * @returns {Promise} Promise that resolves to search results
 */
export const searchMovies = async (searchText, page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchText)}&page=${page}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    
    if (data.Response === 'False') {
      throw new Error(data.Error || 'No movies found');
    }

    return {
      movies: data.Search || [],
      totalResults: parseInt(data.totalResults) || 0,
      currentPage: page
    };
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

/**
 * Get movie details by IMDB ID
 * @param {string} movieId - IMDB ID of the movie
 * @returns {Promise} Promise that resolves to movie details
 */
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&i=${encodeURIComponent(movieId)}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }

    const data = await response.json();
    
    if (data.Response === 'False') {
      throw new Error(data.Error || 'Movie not found');
    }

    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
