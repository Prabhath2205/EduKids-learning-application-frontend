// In your App.js file
import React from 'react';
// 1. Import the router components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 2. Import your components
import Header from './components/header';
import Footer from './components/footer';

// 3. Import your page components
import About from './pages/about';
import Home from './pages/home';
import ProfilePage from './pages/ProfilePage';
import Login from './pages/login'; // <-- 1. IMPORT THE LOGIN PAGE

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
          
          {/* Optional: Add a default route for "/" */}
          <Route path="/" element={<Home />} />

        </Routes>
      </main>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;