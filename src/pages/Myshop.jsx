import React, { useState } from 'react';
import Dashboard from '../components/dashboard.jsx';
import Orders from '../components/order.jsx';
import Products from '../components/product.jsx';
import Reviews from '../components/review.jsx';
import './MyShop.css';
import Header from "../components/Header";
import { FaChartBar, FaBox, FaShoppingBag, FaStar } from 'react-icons/fa';

const MyShop = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <Orders />;
      case 'products':
        return <Products />;
      case 'reviews':
        return <Reviews />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="myshop-page-container">
      <Header/>
      <div className="myshop-main-content-area">
        <div className="myshop-sidebar">
          <h2 className="myshop-sidebar-title">My Shop</h2>
          <nav className="myshop-sidebar-nav">
            <button
              className={`myshop-nav-item ${activeSection === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveSection('dashboard')}
            >
              <FaChartBar className="myshop-nav-icon" />
              Dashboard
            </button>
            <button
              className={`myshop-nav-item ${activeSection === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveSection('orders')}
            >
              <FaBox className="myshop-nav-icon" />
              Orders
            </button>
            <button
              className={`myshop-nav-item ${activeSection === 'products' ? 'active' : ''}`}
              onClick={() => setActiveSection('products')}
            >
              <FaShoppingBag className="myshop-nav-icon" />
              Products
            </button>
            <button
              className={`myshop-nav-item ${activeSection === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveSection('reviews')}
            >
              <FaStar className="myshop-nav-icon" />
              Reviews
            </button>
          </nav>
        </div>
        <div className="myshop-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MyShop;