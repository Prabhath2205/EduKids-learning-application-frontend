import React, { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam&display=swap');

  .view-words-container {
    margin: 0;
    font-family: 'Noto Sans Malayalam', sans-serif;
    box-sizing: border-box;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    
    overflow: hidden;
  }

  .view-words-container *, 
  .view-words-container *::before, 
  .view-words-container *::after {
    box-sizing: inherit;
  }

  /* --- Background Shapes --- */
  .view-words-container .shape {
    position: absolute;
    border-radius: 9999px;
    opacity: 0.5;
    z-index: 1;
  }
  

  /* --- Main Content --- */
  .view-words-container .main-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 2rem 1rem;
    z-index: 10;
  }

  /* --- Title Bar --- */
  .view-words-container .title-bar {
    width: 100%;
    max-width: 64rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 9999px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 
                0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: 0.75rem 1rem;
    margin-bottom: 3rem;
  }
  .view-words-container .title-text {
    font-size: 2rem;
    color: #374151;
    letter-spacing: 0.1em;
    margin: 0;
  }

  /* --- Word Cards Grid --- */
  .view-words-container .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    gap: 1.5rem;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    justify-items: center;
  }

  .view-words-container .word-card {
    width: 100%;
    aspect-ratio: 1 / 1.2;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(6px);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 2px dashed #9CA3AF;
    transition: all 0.3s;
    cursor: pointer;
    padding: 1rem;
  }

  .view-words-container .word-card:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
                0 2px 4px -2px rgb(0 0 0 / 0.1);
    transform: scale(1.05);
  }

  .view-words-container .word-card img {
    width: 80%;
    height: 100px;
    object-fit: contain;
  }

  .view-words-container .word-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #374151;
    margin-top: 0.5rem;
  }

  /* --- Speaker Button --- */
  .view-words-container .speak-btn {
    background: #fff;
    border: 2px solid #eee;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s, background-color 0.3s;
    margin-bottom: 0.5rem;
  }
  .view-words-container .speak-btn:hover {
    transform: scale(1.1);
    background-color: #FDE68A;
  }

  @media (min-width: 640px) {
    .view-words-container .title-text { font-size: 2.25rem; }
    .view-words-container .word-title { font-size: 1.5rem; }
  }
`;

const initialWords = [
  { id: 1, title: "Apple", image: "https://placehold.co/150x150/f87171/ffffff?text=Apple&font=poppins" },
  { id: 2, title: "Ball", image: "https://placehold.co/150x150/60a5fa/ffffff?text=Ball&font=poppins" },
  { id: 3, title: "Cat", image: "https://placehold.co/150x150/fbbf24/ffffff?text=Cat&font=poppins" },
  { id: 4, title: "Dog", image: "https://placehold.co/150x150/34d399/ffffff?text=Dog&font=poppins" },
];

function ViewWords() {
  const [words] = useState(initialWords);

  const speakWord = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
  };

  return (
    <>
      <style>{styles}</style>

      <div className="view-words-container">
        {/* Background shapes */}
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>

        <div className="main-content">
          <div className="title-bar">
            <h1 className="title-text">Learn Words</h1>
          </div>

          <div className="card-grid">
            {words.map((word) => (
              <div key={word.id} className="word-card">
                <img src={word.image} alt={word.title} />
                <h3 className="word-title">{word.title}</h3>
                <button className="speak-btn" onClick={() => speakWord(word.title)}>
                  🔊
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewWords;
