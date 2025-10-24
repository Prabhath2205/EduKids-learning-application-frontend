import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { FaBox, FaMoneyBillWave, FaHourglassHalf } from 'react-icons/fa';
import { MdOutlineShowChart } from 'react-icons/md';

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    sections: 4,
    feedback: 0,
    thisMonth: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken') || localStorage.getItem('token');

      // Fetch all stats
      const [userRes, feedbackRes, monthlyRes] = await Promise.all([
        fetch('http://localhost:5000/api/admin/user-count', {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch('http://localhost:5000/api/admin/feedback-count', {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch('http://localhost:5000/api/admin/monthly-feedback', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      const userData = await userRes.json();
      const feedbackData = await feedbackRes.json();
      const monthlyData = await monthlyRes.json();

      setStats({
        users: userData.count || 0,
        sections: 4,
        feedback: feedbackData.count || 0,
        thisMonth: monthlyData.thisMonth || 0
      });
      setLoading(false);
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
      setLoading(false);
    }
  };

  const statsArray = [
    { label: 'Total Users', value: stats.users, icon: <FaBox /> },
    { label: 'Total Sections', value: stats.sections, icon: <FaMoneyBillWave /> },
    { label: 'Feedbacks', value: stats.feedback, icon: <FaHourglassHalf /> },
    { label: 'This Month', value: stats.thisMonth, icon: <MdOutlineShowChart /> }
  ];

  if (loading) {
    return (
      <div className="dashboard">
        <h1 className="dashboard-title">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>

      <div className="stats-grid">
        {statsArray.map((stat, index) => (
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