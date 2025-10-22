import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- STYLES ---
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  .admin-portal-wrapper {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #c0f1ff 0%, #f2fbc0 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 20px;
  }

  .admin-login-container {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }

  .admin-login-container h1 {
    font-size: 28px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 10px;
  }

  .admin-login-container p {
    font-size: 15px;
    color: #6b7280;
    margin-bottom: 30px;
  }

  .admin-login-container .input-group {
    margin-bottom: 20px;
    text-align: left;
  }

  .admin-login-container .input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #374151;
    font-size: 14px;
  }

  .admin-login-container .input-group input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .admin-login-container .input-group input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
  
  .admin-login-container .error-message {
    color: #ef4444;
    font-size: 14px;
    margin-top: 15px;
    text-align: center;
    font-weight: 500;
  }

  .admin-login-container .login-button {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 8px;
    background-color: #1f2937;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .admin-login-container .login-button:hover {
    background-color: #374151;
  }
`;

// --- AdminLogin Component ---
function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple validation (you can make this more robust)
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // For now, accept any credentials (you can add real validation later)
    // Store admin token in localStorage
    localStorage.setItem('adminToken', 'admin-authenticated');
    
    // Navigate to admin dashboard
    navigate('/admin/dashboard');
  };

  return (
    <>
      <style>{styles}</style>
      <div className="admin-portal-wrapper">
        <div className="admin-login-container">
          <h1>Admin Login</h1>
          <p>Please enter your credentials to proceed.</p>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g., admin"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
