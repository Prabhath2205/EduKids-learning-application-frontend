import React, { useState } from "react";
import Header from "../components/header";
import "../style/alphabets.css";
import { HiSpeakerWave } from "react-icons/hi2";
import Footer from "../components/footer";

// --- Malayalam alphabet dataset ---
const swaraksharam = ["അ","ആ","ഇ","ഈ","ഉ","ഊ","ഋ","എ","ഏ","ഐ","ഒ","ഓ","ഔ","അം","അഃ"];
const vyanjanaksharam = [
  "ക","ഖ","ഗ","ഘ","ങ","ച","ഛ","ജ","ഝ","ഞ",
  "ട","ഠ","ഡ","ഢ","ണ","ത","ഥ","ദ","ധ","ന",
  "പ","ഫ","ബ","ഭ","മ","യ","ര","ല","വ","ശ",
  "ഷ","സ","ഹ","ള","റ","ഴ"
];
const chillaksharam = ["ൻ", "ൺ", "ൽ", "ൾ", "ർ"];

// Combine into extended data with audio paths using the actual letters
const alphabetData = [
  ...swaraksharam.map((letter) => ({ 
    letter, 
    image: "", 
    sound: `/sounds/swaraksharam/${letter}.wav`,
    category: "swaraksharam"
  })),
  ...vyanjanaksharam.map((letter) => ({ 
    letter, 
    image: "", 
    sound: `/sounds/vyanjanaksharam/${letter}.wav`,
    category: "vyanjanaksharam"
  })),
  ...chillaksharam.map((letter) => ({ 
    letter, 
    image: "", 
    sound: `/sounds/chillaksharam/${letter}.wav`,
    category: "chillaksharam"
  }))
];

const tileColors = ["#FFCDD2", "#C8E6C9", "#BBDEFB", "#FFF9C4", "#D1C4E9"];
const letterColors = ["#B71C1C", "#1B5E20", "#0D47A1", "#F57F17", "#4A148C"];

const AlphabetPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const [audioError, setAudioError] = useState(false);

  const handleCardClick = (index) => setCurrentCardIndex(index);
  const handleCloseModal = () => {
    setCurrentCardIndex(null);
    setAudioError(false);
  };
  const handleNextCard = () =>
    setCurrentCardIndex((prev) => (prev + 1) % alphabetData.length);
  const handlePrevCard = () =>
    setCurrentCardIndex((prev) => (prev - 1 + alphabetData.length) % alphabetData.length);

  const playPronunciation = (soundPath) => {
    setAudioError(false);
    
    if (!soundPath) {
      alert("Audio file not available yet!");
      return;
    }

    const audio = new Audio(soundPath);
    
    audio.oncanplaythrough = () => {
      audio.play().catch(err => {
        console.error("Error playing audio:", err);
        setAudioError(true);
        alert("Could not play audio. Make sure the audio file exists at: " + soundPath);
      });
    };

    audio.onerror = () => {
      console.error("Error loading audio file:", soundPath);
      setAudioError(true);
      alert("Audio file not found at: " + soundPath);
    };
  };

  // === Divide data by section ===
  const section1Data = alphabetData.slice(0, swaraksharam.length);
  const section2Data = alphabetData.slice(swaraksharam.length, swaraksharam.length + vyanjanaksharam.length);
  const section3Data = alphabetData.slice(
    swaraksharam.length + vyanjanaksharam.length,
    swaraksharam.length + vyanjanaksharam.length + chillaksharam.length
  );

  // Subdividing section 2 (Vyanjans)
  const section2_part1 = section2Data.slice(0, 25);
  const section2_part2 = section2Data.slice(25, 33);
  const section2_part3 = section2Data.slice(33, 36);

  return (
    <div className="alphabet-page-container">
      <main className="main-content">

        {/* ---------- SECTION 1: Swaraks ---------- */}
        <div className="section section1">
          <div className="title-bar">
            <h2 className="title-text">SECTION 1: സ്വരാക്ഷരം</h2>
          </div>
          <div className="card-grid section1-grid">
            {section1Data.map((card, index) => (
              <div
                key={index}
                className="card"
                onClick={() => handleCardClick(index)}
                style={{ backgroundColor: tileColors[index % tileColors.length] }}
              >
                <span className="card-letter" style={{ color: letterColors[index % letterColors.length] }}>
                  {card.letter}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- SECTION 2: Vyanjans ---------- */}
        <div className="section section2">
          <div className="title-bar">
            <h2 className="title-text">SECTION 2: വ്യഞ്ജനാക്ഷരം</h2>
          </div>

          {/* 5 x 5 grid */}
          <div className="card-grid section2-grid part1">
            {section2_part1.map((card, index) => (
              <div
                key={index + section1Data.length}
                className="card"
                onClick={() => handleCardClick(index + section1Data.length)}
                style={{ backgroundColor: tileColors[index % tileColors.length] }}
              >
                <span className="card-letter" style={{ color: letterColors[index % letterColors.length] }}>
                  {card.letter}
                </span>
              </div>
            ))}
          </div>

          {/* 2 x 4 grid */}
          <div className="card-grid section2-grid part2">
            {section2_part2.map((card, index) => (
              <div
                key={index + section1Data.length + section2_part1.length}
                className="card"
                onClick={() => handleCardClick(index + section1Data.length + section2_part1.length)}
                style={{ backgroundColor: tileColors[index % tileColors.length] }}
              >
                <span className="card-letter" style={{ color: letterColors[index % letterColors.length] }}>
                  {card.letter}
                </span>
              </div>
            ))}
          </div>

          {/* 1 x 3 grid */}
          <div className="card-grid section2-grid part3">
            {section2_part3.map((card, index) => (
              <div
                key={index + section1Data.length + section2_part1.length + section2_part2.length}
                className="card"
                onClick={() => handleCardClick(index + section1Data.length + section2_part1.length + section2_part2.length)}
                style={{ backgroundColor: tileColors[index % tileColors.length] }}
              >
                <span className="card-letter" style={{ color: letterColors[index % letterColors.length] }}>
                  {card.letter}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- SECTION 3: Chillus ---------- */}
        <div className="section section3">
          <div className="title-bar">
            <h2 className="title-text">SECTION 3: ചില്ലാക്ഷരം</h2>
          </div>

          <div className="card-grid section3-grid">
            {section3Data.map((card, index) => (
              <div
                key={index + section1Data.length + section2_part1.length + section2_part2.length + section2_part3.length}
                className="card"
                onClick={() => handleCardClick(index + section1Data.length + section2_part1.length + section2_part2.length + section2_part3.length)}
                style={{ backgroundColor: tileColors[index % tileColors.length] }}
              >
                <span className="card-letter" style={{ color: letterColors[index % letterColors.length] }}>
                  {card.letter}
                </span>
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
                <p>Letter</p>
                <span>{alphabetData[currentCardIndex].letter}</span>
                {audioError && (
                  <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
                    Audio file not found
                  </p>
                )}
              </div>
              <button
                className="speaker-button"
                onClick={() => playPronunciation(alphabetData[currentCardIndex].sound)}
                title="Play pronunciation"
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
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default AlphabetPage;
