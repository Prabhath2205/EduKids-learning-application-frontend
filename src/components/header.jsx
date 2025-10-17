import React from 'react';

// --- STYLES ---
const HeaderStyles = () => (
    <style>{`
        /* --- Header Styles --- */
        .page-header {
            width: 100%;
            padding: 1rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative; /* keeps it above background shapes */
            z-index: 50;
            background-color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .logo {
            font-size: 1.875rem; /* 30px */
            font-weight: 700;
            color: #6A0DAD;
        }

        .main-nav {
            display: none; /* Hidden on mobile */
        }

        @media (min-width: 768px) {
            .main-nav {
                display: flex;
                align-items: center;
                gap: 2rem; /* 32px */
            }
        }

        .main-nav a {
            color: #4B5563;
            text-decoration: none;
            transition: color 0.3s;
            font-weight: 500;
        }

        .main-nav a:hover {
            color: #6A0DAD;
        }

        .user-icon-container {
            display: flex;
            align-items: center;
        }
    `}</style>
);

// --- User Icon Component ---
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A8A8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

// --- MAIN HEADER COMPONENT ---
const Header = () => {
    return (
        <>
            <HeaderStyles />
            <header className="page-header">
                <h1 className="logo">EduKids</h1>
                <nav className="main-nav">
                    <a href="#">ABOUT US</a>
                    <a href="#">HOME</a>
                    <a href="#">PROGRESS</a>
                </nav>
                <div className="user-icon-container">
                    <UserIcon />
                </div>
            </header>
        </>
    );
};

export default Header;
