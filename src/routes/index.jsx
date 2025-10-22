import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import layout components
import Header from '../components/header';
import Footer from '../components/footer';
import AdminSidebar from '../pages/AdminSidebar';

// Import route guards
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';

// Import page components
import Home from '../pages/home';
import About from '../pages/about';
import Login from '../pages/login';
import AdminLogin from '../pages/AdminLogin';
import ProfilePage from '../pages/ProfilePage';
import Alphabets from '../pages/alphabets';
import ViewWords from '../pages/ViewWords';

// Import admin components
import Dashboard from '../components/dashboard';
import Users from '../components/Users';
import Feedback from '../components/Feedback';
import AdminHome from '../pages/AdminHome';
import AdminWords from '../pages/AdminWords';

const AppRoutes = () => {
  return (
    <Routes>
      {/* ========== PUBLIC ROUTES (with Header & Footer) ========== */}
      {/* About is the landing page */}
      <Route path="/" element={<PublicLayout><About /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
      <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
      
      {/* Admin Login - No header/footer */}
      <Route path="/adminlogin" element={<AdminLogin />} />

      {/* ========== PROTECTED USER ROUTES (with Header & Footer) ========== */}
      {/* Home page requires login */}
      <Route 
        path="/home" 
        element={
          <ProtectedRoute>
            <PublicLayout><Home /></PublicLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <PublicLayout><ProfilePage /></PublicLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/alphabets" 
        element={
          <ProtectedRoute>
            <PublicLayout><Alphabets /></PublicLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/viewwords" 
        element={
          <ProtectedRoute>
            <PublicLayout><ViewWords /></PublicLayout>
          </ProtectedRoute>
        } 
      />

      {/* ========== ADMIN ROUTES (with Sidebar, no Header/Footer) ========== */}
      <Route 
        path="/admin" 
        element={
          <AdminRoute>
            <AdminSidebar />
          </AdminRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="content" element={<AdminHome />} />
        <Route path="words" element={<AdminWords />} />
      </Route>

      {/* ========== FALLBACK ROUTE ========== */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

// Public Layout Wrapper (adds Header and Footer)
const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppRoutes;
