import React from 'react';
import './Feedback.css';

const Feedback = () => {
    const feedbacks = [
        { id: '1', username: 'Rahul Sharma', email: 'rahul@gmail.com', message: 'Loving the app!', date: '2025-10-18' },
        { id: '2', username: 'Priya Singh', email: 'priya@gmail.com', message: 'Great interactive content.', date: '2025-10-19' },
        { id: '3', username: 'Amit Kumar', email: 'amit@gmail.com', message: 'Some words are missing.', date: '2025-10-19' }
    ];

    return (
        <div className="feedback-page">
            <h1 className="section-title">User Feedback</h1>
            <div className="feedback-container">
                {feedbacks.map(fb => (
                    <div key={fb.id} className="feedback-card">
                        <div className="feedback-header">
                            <div className="user-info">
                                <div className="user-avatar">{fb.username.charAt(0).toUpperCase()}</div>
                                <div className="user-details">
                                    <h4>{fb.username}</h4>
                                    <span>{fb.email}</span>
                                </div>
                            </div>
                            <span className="feedback-date">{fb.date}</span>
                        </div>
                        <p className="feedback-message">{fb.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feedback;
