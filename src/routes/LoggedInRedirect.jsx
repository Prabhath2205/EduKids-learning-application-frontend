import React from 'react';
import { Navigate } from 'react-router-dom';

const LoggedInRedirect = ({ children }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  // If user is logged in, redirect to profile page
  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }
  
  // Otherwise, render children (e.g., About page)
  return children;
};

export default LoggedInRedirect;
