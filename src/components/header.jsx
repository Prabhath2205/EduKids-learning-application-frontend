// 1. Import Link from react-router-dom
import React from 'react';
import { Link } from 'react-router-dom'; 
import "./header.css";

// --- User Icon Component (No change needed) ---
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fffefeff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

// --- MAIN HEADER COMPONENT (Fixed) ---
const Header = () => {
    return (
        <header className="page-header">
            <h1 className="logo">EduKids</h1>
            <nav className="main-nav">
                <Link to="/about">ABOUT US</Link>
                <Link to="/home">HOME</Link>
                <Link to="/progress">PROGRESS</Link>
            </nav>
            
            {/* --- THIS IS THE CHANGE --- */}
            {/* Wrap the icon in a Link component that points to /profile */}
            <Link to="/profile" className="user-icon-container">
                <UserIcon />
            </Link>
        </header>
    );
};

export default Header;