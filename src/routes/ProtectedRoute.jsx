import React from 'react';
import { Navigate } from 'react-router-dom';

// This component protects routes that require authentication
const ProtectedRoute = ({ children }) => {
  // Check if user is authenticated (you can modify this logic)
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists
  };

  // If not authenticated, redirect to login
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children components
  return children;
};

export default ProtectedRoute;