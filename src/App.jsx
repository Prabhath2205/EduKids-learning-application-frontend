import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes';
import './App.css';

function App() {
  useEffect(() => {
    // This will clear the token from localStorage when the window or tab is closed
    const handleUnload = () => {
      localStorage.removeItem('token');
      // If you also store the token in sessionStorage, uncomment the line below:
      // sessionStorage.removeItem('token');
    };
    window.addEventListener('beforeunload', handleUnload);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
