import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRedirect = ({ children }) => {
  const adminToken = localStorage.getItem('adminToken');
  
  // If admin is logged in, redirect them away from user routes
  if (adminToken) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  
  return children;
};

export default AdminRedirect;
