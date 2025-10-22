import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Import your actual components
import Header from './components/header';
import Footer from './components/footer';
import AdminLogin from './pages/AdminLogin';
import About from './pages/about';
import Home from './pages/home';
import ProfilePage from './pages/ProfilePage';
import Login from './pages/login';
import Alphabets from "./pages/alphabets";
import AdminSidebar from './pages/AdminSidebar';
import Dashboard from './components/dashboard';
import Users from './components/Users';
import Feedback from './components/Feedback';
import AdminHome from './pages/AdminHome';
import AdminWords from './pages/AdminWords';
import ViewWords from './pages/ViewWords';
// This component determines the layout based on the current URL
function AppContent() {
  const location = useLocation();
  // Check if the current path is an admin route that should have the sidebar
  const isAdminRouteWithSidebar = location.pathname.startsWith("/admin") && location.pathname !== "/adminlogin";
  // Check if the current path is the admin login page
  const isAdminLoginPage = location.pathname === "/adminlogin";

  return (
    <>
      {/* Show Header/Footer only for NON-admin routes */}
      {!isAdminRouteWithSidebar && !isAdminLoginPage && <Header />}

      <main>
        <Routes>
          {/* Public Routes (no sidebar) */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/alphabets" element={<Alphabets />} />
          <Route path="/ViewWords" element={<ViewWords />} />


          {/* Admin Routes (all nested inside AdminSidebar to show the layout) */}
          <Route path="/admin" element={<AdminSidebar />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="content" element={<AdminHome />} />
            {/* The "words" route is now correctly nested */}
            <Route path="words" element={<AdminWords />} />
          </Route>
        </Routes>
      </main>

      {/* Show Header/Footer only for NON-admin routes */}
      {!isAdminRouteWithSidebar && !isAdminLoginPage && <Footer />}
    </>
  );
}

// The main App component wraps everything in the router
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

