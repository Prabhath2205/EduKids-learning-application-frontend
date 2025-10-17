import React, { useState } from "react";
import Header from "../components/header";
import "../style/alphabets.css";
import flowerImage from "../assets/flowers.png";
import { HiSpeakerWave } from "react-icons/hi2";

// --- Dummy alphabet dataset ---
const alphabetData = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((char) => ({
  letter: char,
  image: "",
  sound: "",
}));

// Add filler cards to meet total counts
const extendedData = [
  ...alphabetData,
  ...Array.from({ length: 40 }, (_, i) => ({
    letter: `X${i + 1}`,
    image: "",
    sound: "",
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    letter: `S3-${i + 1}`,
    image: "",
    sound: "",
  })),
];

const AlphabetPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(null);

  const handleCardClick = (index) => setCurrentCardIndex(index);
  const handleCloseModal = () => setCurrentCardIndex(null);
  const handleNextCard = () =>
    setCurrentCardIndex((prev) => (prev + 1) % extendedData.length);
  const handlePrevCard = () =>
    setCurrentCardIndex((prev) => (prev - 1 + extendedData.length) % extendedData.length);

  const playPronunciation = (soundPath) => {
    alert(`Sound clicked! (Path: ${soundPath || "No sound yet"})`);
  };

  // === Divide data by section ===
  const section1Data = extendedData.slice(0, 15);
  const section2Data = extendedData.slice(15, 51); // 36 cards total
  const section3Data = extendedData.slice(51, 56); // 5 cards

  // Subdividing section 2
  const section2_part1 = section2Data.slice(0, 25); // 5x5 grid
  const section2_part2 = section2Data.slice(25, 33); // 8 cards (2x4)
  const section2_part3 = section2Data.slice(33, 36); // 3 cards (1 row)

  return (
    <div className="alphabet-page-container">
      <Header />

      <main className="main-content">

        {/* ---------- SECTION 1 ---------- */}
        <div className="section section1">
          <div className="title-bar">
            <h2 className="title-text">SECTION 1</h2>
          </div>

          <div className="card-grid section1-grid">
            {section1Data.map((card, index) => (
              <div
                key={index}
                className="card"
                onClick={() => handleCardClick(index)}
              >
                <span className="card-letter">{card.letter}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- SECTION 2 ---------- */}
        <div className="section section2">
          <div className="title-bar">
            <h2 className="title-text">SECTION 2</h2>
          </div>

          {/* 5 x 5 grid */}
          <div className="card-grid section2-grid part1">
            {section2_part1.map((card, index) => (
              <div
                key={index + section1Data.length}
                className="card"
                onClick={() => handleCardClick(index + section1Data.length)}
              >
                <span className="card-letter">{card.letter}</span>
              </div>
            ))}
          </div>

          {/* 2 x 4 grid */}
          <div className="card-grid section2-grid part2">
            {section2_part2.map((card, index) => (
              <div
                key={index + section1Data.length + section2_part1.length}
                className="card"
                onClick={() =>
                  handleCardClick(index + section1Data.length + section2_part1.length)
                }
              >
                <span className="card-letter">{card.letter}</span>
              </div>
            ))}
          </div>

          {/* 1 x 3 grid */}
          <div className="card-grid section2-grid part3">
            {section2_part3.map((card, index) => (
              <div
                key={
                  index +
                  section1Data.length +
                  section2_part1.length +
                  section2_part2.length
                }
                className="card"
                onClick={() =>
                  handleCardClick(
                    index +
                      section1Data.length +
                      section2_part1.length +
                      section2_part2.length
                  )
                }
              >
                <span className="card-letter">{card.letter}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- SECTION 3 ---------- */}
        <div className="section section3">
          <div className="title-bar">
            <h2 className="title-text">SECTION 3</h2>
          </div>

          <div className="card-grid section3-grid">
            {section3Data.map((card, index) => (
              <div
                key={
                  index +
                  section1Data.length +
                  section2_part1.length +
                  section2_part2.length +
                  section2_part3.length
                }
                className="card"
                onClick={() =>
                  handleCardClick(
                    index +
                      section1Data.length +
                      section2_part1.length +
                      section2_part2.length +
                      section2_part3.length
                  )
                }
              >
                <span className="card-letter">{card.letter}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ---------- MODAL ---------- */}
      {currentCardIndex !== null && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-arrow prev" onClick={handlePrevCard}>
              &#10094;
            </button>

            <div className="modal-card-container">
              <div className="modal-image-placeholder">
                <p>Image for</p>
                <span>{extendedData[currentCardIndex].letter}</span>
              </div>
              <button
                className="speaker-button"
                    onClick={() =>
                        playPronunciation(extendedData[currentCardIndex].sound)
                     }
            >
  <HiSpeakerWave />
</button>
            </div>

            <button className="modal-arrow next" onClick={handleNextCard}>
              &#10095;
            </button>
          </div>
        </div>
      )}

      <footer className="page-footer">
        <img src={flowerImage} alt="Decorative flower border" /><img src={flowerImage} alt="Decorative flower border" />
      </footer>
    </div>
  );
};

export default AlphabetPage;
