import React from 'react';
import SubjectCard from '../components/subjectcard'; // Import the reusable card
import '../style/home.css'; // External CSS for the page

// --- TODO: Replace these with your actual image paths ---
import alphabetImage from '../assets/alphabets-image.png';
import wordsImage from '../assets/words-image.png';
import animalsImage from '../assets/animals-image.png';
import dailyImage from '../assets/daily-image.png';

// You can get this data from an API, but for now, it's an array
const subjectData = [
  {
    title: "Alphabets",
    description: "Cute puppies, friendly cats, jungle animals, and farm friends waiting to be colored!",
    pageCount: "24",
    imageSrc: alphabetImage,
    startLink: "/alphabets" // Example link
  },
  {
    title: "Words",
    description: "Cute puppies, friendly cats, jungle animals, and farm friends waiting to be colored!",
    pageCount: "24",
    imageSrc: wordsImage,
    startLink: "/ViewWords"
  },
  {
    title: "Animals",
    description: "Cute puppies, friendly cats, jungle animals, and farm friends waiting to be colored!",
    pageCount: "24",
    imageSrc: animalsImage,
    startLink: "/animals"
  },
  {
    title: "Daily Activities",
    description: "Cute puppies, friendly cats, jungle animals, and farm friends waiting to be colored!",
    pageCount: "24",
    imageSrc: dailyImage,
    startLink: "/daily"
  }
];

function Home() {
  return (
    <div className="home-page-container">
      <h1 className="welcome-heading">HI JOHNNY !</h1>

      <div className="subject-grid">
        {/* We map over the data array to create a card for each item */}
        {subjectData.map((subject) => (
          <SubjectCard
            key={subject.title}
            title={subject.title}
            description={subject.description}
            pageCount={subject.pageCount}
            imageSrc={subject.imageSrc}
            startLink={subject.startLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;