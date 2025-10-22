import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT LINK
import '../style/about.css'; // External CSS file

// Importing icons for the feature cards
import { FaBookOpen, FaMusic, FaHeart, FaShieldAlt } from 'react-icons/fa';

// Placeholder for the main illustration
import heroImage from '../assets/hero-illustration.png'; 

function About() {
  return (
    <div className="about-page">
    <main className="main-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content-card">
          <div className="hero-text">
            <h1>Learning made fun for Every Child</h1>
            <p>
              Interactive, engaging lessons for specially abled children – guided
              by caregivers and loved ones.
            </p>
            <div className="hero-buttons">
              {/* --- CHANGES START HERE --- */}
              {/* 2. Changed <button> to <Link> and added to="/login" */}
              <Link to="/login" className="btn parent-login">Parent Login</Link>
              <Link to="/adminlogin" className="btn admin-login">Admin Login</Link>
              {/* --- CHANGES END HERE --- */}
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Learning illustration" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          
          <div className="feature-card card-lessons">
            <div className="feature-icon">
              <FaBookOpen size={30} />
            </div>
            <h3>Interactive Lessons</h3>
            <p>Engaging activities designed specifically for children with special needs</p>
          </div>

          <div className="feature-card card-sounds">
            <div className="feature-icon">
              <FaMusic size={30} />
            </div>
            <h3>Fun with Sounds</h3>
            <p>Audio-visual learning experiences that make education enjoyable</p>
          </div>

          <div className="feature-card card-creative">
            <div className="feature-icon">
              <FaHeart size={30} />
            </div>
            <h3>Creative Activities</h3>
            <p>Art, music, and creative exercises to boost imagination</p>
          </div>

          <div className="feature-card card-secure">
            <div className="feature-icon">
              <FaShieldAlt size={30} />
            </div>
            <h3>Safe and Secure</h3>
            <p>Child-safe platform with parental controls and privacy protection</p>
          </div>

        </div>
      </section>
    </main>
    </div>
  );
}

export default About;
