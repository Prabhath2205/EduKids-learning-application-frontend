import React, { useState } from 'react';
import '../style/ProfilePage.css'; // External CSS for styling

// Importing icons from react-icons
import { 
    FaUserEdit, FaTrashAlt, FaSignOutAlt, FaPaperPlane, FaTimes, 
    FaUserCircle, FaEnvelope, FaPhoneAlt, FaUserTag, FaBirthdayCake 
} from 'react-icons/fa';

// --- MAIN PROFILE PAGE COMPONENT ---
function ProfilePage() {
    // We use the data structure you provided as the initial state
    const [userData, setUserData] = useState({
        childname: "Johnny",
        email: "johnny.doe@example.com",
        phonenumber: "123-456-7890",
        role: "Parent",
        dob: "2018-05-15",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editableData, setEditableData] = useState(userData);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [feedbackText, setFeedbackText] = useState("");

    // Handle input changes during edit mode
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableData(prev => ({ ...prev, [name]: value }));
    };

    // Save changes and exit edit mode
    const handleSaveChanges = () => {
        setUserData(editableData);
        setIsEditing(false);
        console.log("User data saved!");
    };

    // --- Action Handlers ---
    const handleLogout = () => {
        console.log("User logged out.");
        // In a real app, you would clear auth tokens and redirect here
    };

    const handleDeleteAccount = () => {
        console.log("User account deletion initiated.");
        // In a real app, this would likely open a confirmation modal
        // and then make an API call to delete the user.
    };
    
    const handleSendFeedback = () => {
        if (feedbackText.trim() === "") return;
        console.log("Feedback submitted:", feedbackText);
        setFeedbackText("");
        setIsFeedbackOpen(false);
    };

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
                            <input type="email" name="email" value={editableData.email} onChange={handleInputChange} />
                        ) : (
                            <span>{userData.email}</span>
                        )}
                    </div>
                    <div className="detail-item">
                        <FaPhoneAlt className="detail-icon" />
                        <label>Phone</label>
                        {isEditing ? (
                            <input type="tel" name="phonenumber" value={editableData.phonenumber} onChange={handleInputChange} />
                        ) : (
                            <span>{userData.phonenumber}</span>
                        )}
                    </div>
                    <div className="detail-item">
                        <FaBirthdayCake className="detail-icon" />
                        <label>Date of Birth</label>
                        {isEditing ? (
                            <input type="date" name="dob" value={editableData.dob} onChange={handleInputChange} />
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

            {/* --- Feedback Modal --- */}
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