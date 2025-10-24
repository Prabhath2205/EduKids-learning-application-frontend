import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ProfilePage.css';
import API_URL from '../config';

import { 
    FaUserEdit, FaTrashAlt, FaSignOutAlt, FaPaperPlane, FaTimes, 
    FaUserCircle, FaEnvelope, FaPhoneAlt, FaUserTag, FaBirthdayCake 
} from 'react-icons/fa';

function ProfilePage() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editableData, setEditableData] = useState({});
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [feedbackText, setFeedbackText] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            const payload = JSON.parse(atob(token.split('.')[1]));
            const userId = payload.id;

            const res = await fetch(`${API_URL}/api/users/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!res.ok) {
                throw new Error('Failed to fetch profile');
            }

            const data = await res.json();
            setUserData(data);
            setEditableData(data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching profile:', err);
            setError(err.message);
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = async () => {
        try {
            const token = localStorage.getItem('token');
            const payload = JSON.parse(atob(token.split('.')[1]));
            const userId = payload.id;

            const res = await fetch(`${API_URL}/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(editableData)
            });

            if (!res.ok) {
                throw new Error('Failed to update profile');
            }

            const updatedData = await res.json();
            setUserData(updatedData.user);
            setIsEditing(false);
            alert('Profile updated successfully!');
        } catch (err) {
            console.error('Error updating profile:', err);
            alert('Failed to update profile: ' + err.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleDeleteAccount = async () => {
        if (!window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const payload = JSON.parse(atob(token.split('.')[1]));
            const userId = payload.id;

            const res = await fetch(`${API_URL}/api/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!res.ok) {
                throw new Error('Failed to delete account');
            }

            localStorage.removeItem('token');
            alert('Account deleted successfully');
            navigate('/login');
        } catch (err) {
            console.error('Error deleting account:', err);
            alert('Failed to delete account: ' + err.message);
        }
    };
    
    const handleSendFeedback = async () => {
        if (feedbackText.trim() === "") {
            alert('Please enter your feedback before sending.');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            
            if (!token) {
                alert('You must be logged in to send feedback');
                navigate('/login');
                return;
            }
            
            const res = await fetch(`${API_URL}/api/users/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ message: feedbackText })
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to send feedback');
            }

            const result = await res.json();
            alert('Feedback sent successfully! Thank you for your input.');
            setFeedbackText("");
            setIsFeedbackOpen(false);
        } catch (err) {
            console.error('Error sending feedback:', err);
            alert('Failed to send feedback: ' + err.message);
        }
    };

    if (loading) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '100vh',
                fontSize: '18px' 
            }}>
                Loading profile...
            </div>
        );
    }

    if (error || !userData) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '100vh',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <p>Failed to load profile</p>
                <button onClick={() => navigate('/login')}>Go to Login</button>
            </div>
        );
    }

    return (
        <div className="profile-page-container">
            <div className="profile-card">
                <div className="profile-header">
                    <FaUserCircle size={80} className="profile-avatar" />
                    <h1>{userData.childname}</h1>
                    <p className="profile-role">{userData.role} Account</p>
                </div>

                <div className="profile-details">
                    <div className="detail-item">
                        <FaEnvelope className="detail-icon" />
                        <label>Email</label>
                        {isEditing ? (
                            <input 
                                type="email" 
                                name="email" 
                                value={editableData.email} 
                                onChange={handleInputChange} 
                            />
                        ) : (
                            <span>{userData.email}</span>
                        )}
                    </div>
                    <div className="detail-item">
                        <FaPhoneAlt className="detail-icon" />
                        <label>Phone</label>
                        {isEditing ? (
                            <input 
                                type="tel" 
                                name="phonenumber" 
                                value={editableData.phonenumber} 
                                onChange={handleInputChange} 
                            />
                        ) : (
                            <span>{userData.phonenumber}</span>
                        )}
                    </div>
                    <div className="detail-item">
                        <FaBirthdayCake className="detail-icon" />
                        <label>Date of Birth</label>
                        {isEditing ? (
                            <input 
                                type="date" 
                                name="dob" 
                                value={editableData.dob ? new Date(editableData.dob).toISOString().split('T')[0] : ''} 
                                onChange={handleInputChange} 
                            />
                        ) : (
                            <span>{new Date(userData.dob).toLocaleDateString()}</span>
                        )}
                    </div>
                </div>

                <div className="profile-actions">
                    {isEditing ? (
                        <button className="btn btn-save" onClick={handleSaveChanges}>Save Changes</button>
                    ) : (
                        <button className="btn btn-edit" onClick={() => setIsEditing(true)}>
                            <FaUserEdit /> Edit Info
                        </button>
                    )}
                    <button className="btn btn-feedback" onClick={() => setIsFeedbackOpen(true)}>
                        <FaPaperPlane /> Send Feedback
                    </button>
                </div>
                
                <div className="profile-danger-zone">
                     <button className="btn-text btn-logout" onClick={handleLogout}>
                        <FaSignOutAlt /> Log Out
                    </button>
                    <button className="btn-text btn-delete" onClick={handleDeleteAccount}>
                        <FaTrashAlt /> Delete Account
                    </button>
                </div>
            </div>

            {/* Feedback Modal */}
            {isFeedbackOpen && (
                <div className="feedback-overlay">
                    <div className="feedback-modal">
                        <h2>Send Feedback</h2>
                        <p>We'd love to hear your thoughts about the app!</p>
                        <textarea
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                            placeholder="Type your feedback here..."
                        />
                        <div className="feedback-actions">
                            <button className="btn btn-cancel" onClick={() => setIsFeedbackOpen(false)}>Cancel</button>
                            <button className="btn btn-send" onClick={handleSendFeedback}>Send</button>
                        </div>
                         <button className="close-modal-btn" onClick={() => setIsFeedbackOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfilePage;