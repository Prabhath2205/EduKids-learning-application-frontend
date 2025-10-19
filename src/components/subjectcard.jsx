import React from 'react';
import './subjectcard.css'; // External CSS for the card
import { Link } from 'react-router-dom'; // Using Link for React routing
import { FaPlay } from 'react-icons/fa'; // Play icon

function SubjectCard(props) {
  // We'll get title, description, imageSrc, and pageCount from props
  const { title, description, imageSrc, pageCount, startLink = "#" } = props;

  return (
    <div className="subject-card">
      <div className="card-image-container">
        <img src={imageSrc} alt={title} className="card-image" />
        <span className="page-badge">{pageCount} pages</span>
      </div>
      
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="card-actions">
          <Link to="#" className="explore-link">Explore now</Link>
          <Link to={startLink} className="start-button">
            <FaPlay size={12} />
            <span>START</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubjectCard;