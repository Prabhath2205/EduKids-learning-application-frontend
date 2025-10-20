import React from 'react';
import './dashboard.css';
import { FaBox, FaMoneyBillWave, FaHourglassHalf } from 'react-icons/fa';
import { MdOutlineShowChart } from 'react-icons/md';

const Dashboard = () => {
  const stats = [
    { label: 'Total Users', value: '50', icon: <FaBox /> },
    { label: 'Total Sections', value: '4', icon: <FaMoneyBillWave /> },
    { label: 'Feedbacks', value: '23', icon: <FaHourglassHalf /> },
    { label: 'This Month', value: '15', icon: <MdOutlineShowChart /> }
  ];

  
  
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
    </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Dashboard;