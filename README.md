# Netflix-Style Movie Web Application

A modern, Netflix-inspired movie web application built with React, featuring user authentication, movie search, and detailed movie information using the OMDb API.

## Features

### 🔐 Authentication
- **Signup Page**: Create new accounts with name, email, and password
- **Login Page**: Secure login with email and password validation
- **LocalStorage**: User data stored locally in browser
- **Protected Routes**: Automatic redirect to login if not authenticated

### 🎬 Movie Search & Discovery
- **Real-time Search**: Search movies using OMDb API with debounced input
- **Movie Grid**: Beautiful card-based grid layout displaying movie posters, titles, and years
- **Loading States**: Smooth loading indicators during API calls
- **Error Handling**: User-friendly error messages for API failures

### 📱 Movie Details
- **Detailed View**: Comprehensive movie information including:
  - Poster image
  - Title, Year, Rating, Runtime
  - Plot summary
  - Cast (Actors)
  - Director and Writer
  - Genre
  - Ratings from multiple sources
  - Awards

### 🎨 Netflix-Style UI
- **Dark Theme**: Authentic Netflix dark color scheme (#141414)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and transitions
- **Modern Layout**: Clean, professional interface

## Technology Stack

- **React 18.2.0**: Modern React with hooks
- **React Router DOM 6.20.0**: Client-side routing
- **OMDb API**: Movie database API (API Key: 1084abb1)
- **CSS3**: Custom styling with Netflix-inspired design

## Project Structure

```
netflix-movie-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Signup.js          # Signup page component
│   │   ├── Login.js           # Login page component
│   │   ├── Home.js            # Dashboard/Home page
│   │   ├── MovieCard.js       # Movie card component
│   │   ├── MovieDetails.js    # Movie details page
│   │   ├── ProtectedRoute.js  # Route protection component
│   │   ├── Auth.css           # Authentication page styles
│   │   ├── Home.css           # Home page styles
│   │   ├── MovieCard.css      # Movie card styles
│   │   └── MovieDetails.css   # Movie details styles
│   ├── services/
│   │   └── omdbApi.js         # OMDb API service
│   ├── App.js                 # Main app component with routing
│   ├── App.css                # App-level styles
│   ├── index.js               # React entry point
│   └── index.css              # Global styles
├── package.json
└── README.md
```

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, navigate to that URL manually

## Usage

### First Time Setup

1. **Sign Up**: Click "Sign Up" to create a new account
   - Enter your name, email, and password
   - Confirm your password
   - Click "Sign Up" button

2. **Login**: After signup, you'll be automatically logged in
   - Or use the login page to sign in with existing credentials

### Using the App

1. **Search Movies**: 
   - Use the search bar in the navbar
   - Type any movie title
   - Results appear automatically (debounced for performance)

2. **View Movie Details**:
   - Click on any movie card
   - View comprehensive movie information
   - Click "Back to Home" to return

3. **Logout**:
   - Click the "Logout" button in the navbar
   - You'll be redirected to the login page

## API Integration

The app uses the OMDb API for movie data:

- **Search Endpoint**: `https://www.omdbapi.com/?apikey=1084abb1&s=SEARCHTEXT`
- **Details Endpoint**: `https://www.omdbapi.com/?apikey=1084abb1&i=MOVIEID`

API Key: `1084abb1` (configured in `src/services/omdbApi.js`)

## Features Breakdown

### Input Validation
- Email format validation
- Password strength requirements (minimum 6 characters)
- Password confirmation matching
- Required field validation
- Real-time error messages

### Error Handling
- API failure handling
- Network error messages
- User-friendly error displays
- Graceful fallbacks for missing data

### Loading States
- Search loading indicator
- Movie details loading spinner
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints at 480px, 768px, 1024px, 1200px
- Adaptive grid layouts
- Touch-friendly interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- User data is stored in browser LocalStorage (not persistent across devices)
- Passwords are stored in plain text (for demo purposes only - use hashing in production)
- API calls are made directly from the browser (CORS-enabled API)
- No backend server required - fully frontend application

## Future Enhancements

Potential improvements:
- Add favorites/watchlist feature
- Implement pagination for search results
- Add movie trailers integration
- User profile management
- Movie recommendations
- Advanced filtering options

## License

This project is created for educational/demonstration purposes.

---

**Enjoy exploring movies! 🎬🍿**
