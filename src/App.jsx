// In your App.js file
import React from 'react';
// 1. Import the router components
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 2. Import your components
import Header from './components/header';
import Footer from './components/footer';

// 3. Import your page components
import About from './pages/about';
import Home from './pages/home';
import ProfilePage from './pages/ProfilePage';
import Login from './pages/login'; // <-- 1. IMPORT THE LOGIN PAGE
import Alphabets from "./pages/alphabets";

// Admin Layout
import AdminSidebar from './pages/AdminSidebar';

// Admin Pages
import Dashboard from './components/dashboard';
import Users from './components/Users';
import Feedback from './components/Feedback';
import AdminHome from './pages/AdminHome';
import AdminWords from './pages/AdminWords';

function App() {
  return (
    // 4. Wrap your entire app in <BrowserRouter>
    <BrowserRouter>
      {/* Header and Footer are placed OUTSIDE <Routes>.
        This makes them appear on EVERY page.
      */}
      <Header />
      
      {/* 5. <Routes> defines which component to show for each URL */}
      <main>
        <Routes>
          {/* path="/" (the home page) will show the <Home> component
            path="/about" will show the <About> component
          */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} /> {/* <-- 2. ADD THE LOGIN ROUTE */}
          <Route path="/alphabets" element={<Alphabets />} />
          {/* Optional: Add a default route for "/" */}
          <Route path="/" element={<Home />} />

          {/* ADMIN ROUTES with sidebar layout */}
          <Route path="/admin" element={<AdminSidebar />}>
            {/* Default admin landing */}
            <Route index element={<Navigate to="users" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="content" element={<AdminHome />} />
            {/*<Route path="words" element={<AdminWords />} /> */}
          </Route>
          <Route path="/admin/words" element={<AdminWords />} />


        </Routes>
      </main>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;