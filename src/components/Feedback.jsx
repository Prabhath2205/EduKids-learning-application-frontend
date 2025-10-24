import React, { useEffect, useState } from 'react';
import './Feedback.css';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        try {
            const token = localStorage.getItem('adminToken') || localStorage.getItem('token');
            const res = await fetch('http://localhost:5000/api/admin/all-feedback', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            setFeedbacks(data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching feedback:', err);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="feedback-page">
                <h1 className="section-title">Loading...</h1>
            </div>
        );
    }

    return (
        <div className="feedback-page">
            <h1 className="section-title">User Feedback ({feedbacks.length})</h1>
            <div className="feedback-container">
                {feedbacks.map(fb => (
                    <div key={fb._id} className="feedback-card">
                        <div className="feedback-header">
                            <div className="user-info">
                                <div className="user-details">
                                    <h4>{fb.userName || fb.userId?.childname}</h4>
                                    <span>{fb.userEmail || fb.userId?.email}</span>
                                </div>
                            </div>
                            <span className="feedback-date">
                                {new Date(fb.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="feedback-message">{fb.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feedback;