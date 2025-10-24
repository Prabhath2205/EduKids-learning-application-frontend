import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SubjectCardCMS.css";

const SubjectCardCMS = ({ title, imageSrc, pageLink, isEditable, disabled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled && pageLink) {
      navigate(pageLink);
    }
  };

  return (
    <div 
      className={`subject-card-cms ${disabled ? 'disabled' : ''}`} 
      onClick={handleClick}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}
    >
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      {isEditable && <span className="edit-badge">Edit</span>}
    </div>
  );
};

export default SubjectCardCMS;
