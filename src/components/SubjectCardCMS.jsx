// components/SubjectCardCMS.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SubjectCardCMS.css";

function SubjectCardCMS({ title, imageSrc, pageLink, isEditable }) {
  const navigate = useNavigate();

  return (
    <div className="subject-card-cms">
      <img
        src={imageSrc}
        alt={title}
        className="subject-image-cms"
        onClick={() => navigate(pageLink)}
      />
      <h3 className="subject-title-cms">{title}</h3>
      {isEditable && (
        <button
          className="btn-edit-cms"
          onClick={() => navigate(pageLink)}
        >
          Edit
        </button>
      )}
    </div>
  );
}


export default SubjectCardCMS;