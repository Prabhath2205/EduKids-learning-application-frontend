import React from 'react';
import { Navigate } from 'react-router-dom';

// This component protects routes that require admin authentication
const AdminRoute = ({ children }) => {
  // Check if admin is authenticated
  const isAdminAuthenticated = () => {
    const adminToken = localStorage.getItem('adminToken');
    return !!adminToken; // Returns true if admin token exists
  };

  // If not authenticated as admin, redirect to admin login
  if (!isAdminAuthenticated()) {
    return <Navigate to="/adminlogin" replace />;
  }

  // If authenticated, render the children components
  return children;
};

export default AdminRoute;
