import React from "react";
import SubjectCardCMS from "../components/SubjectCardCMS";
import alphabetImage from "../assets/alphabets-image.png";
import wordsImage from "../assets/words-image.png";
import animalsImage from "../assets/animals-image.png";
import dailyImage from "../assets/daily-image.png";
import "../style/AdminHome.css"; // ✅ ensure correct path

const subjects = [
  { title: "Alphabets", image: alphabetImage, pageLink: null, editable: false },
  { title: "Words", image: wordsImage, pageLink: "/admin/words", editable: true },
  { title: "Animals", image: animalsImage, pageLink: null, editable: false },
  { title: "Daily Activities", image: dailyImage, pageLink: null, editable: false },
];

function AdminHome() {
  return (
    <div className="admin-home-container">
      <h1 className="admin-heading">Content Management</h1>
      <div className="subject-grid-admin">
        {subjects.map((sub) => (
          <SubjectCardCMS
            key={sub.title}
            title={sub.title}
            imageSrc={sub.image}
            pageLink={sub.pageLink}
            isEditable={sub.editable}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminHome;
