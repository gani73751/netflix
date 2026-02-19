import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Protected Route Component
 * Checks if user is logged in by verifying session in LocalStorage
 * Redirects to login if not authenticated
 */
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const currentUser = localStorage.getItem('currentUser');

  if (!isAuthenticated || !currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
