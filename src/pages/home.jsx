import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SubjectCard from '../components/subjectcard';
import '../style/home.css';
import API_URL from '../config';

import alphabetImage from '../assets/alphabets-image.png';
import wordsImage from '../assets/words-image.png';
import animalsImage from '../assets/animals-image.png';
import dailyImage from '../assets/daily-image.png';

const subjectData = [
  {
    title: "Alphabets",
    description: "Learn Malayalam alphabets with fun sounds and visuals!",
    pageCount: "56",
    imageSrc: alphabetImage,
    startLink: "/alphabets"
  },
  {
    title: "Words",
    description: "Explore common words with pictures and pronunciation!",
    pageCount: "24",
    imageSrc: wordsImage,
    startLink: "/ViewWords"
  },
  {
    title: "Animals",
    description: "Discover animals with colorful images and sounds!",
    pageCount: "24",
    imageSrc: animalsImage,
    startLink: "/animals"
  },
  {
    title: "Daily Activities",
    description: "Learn about everyday activities in a fun way!",
    pageCount: "24",
    imageSrc: dailyImage,
    startLink: "/daily"
  }
];

function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserName();
  }, []);

  const fetchUserName = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      // Decode token to get user ID
      const payload = JSON.parse(atob(token.split('.')[1]));
      const userId = payload.id;

      const res = await fetch(`${API_URL}/api/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!res.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await res.json();
      setUserName(data.childname);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching user:', err);
      setUserName('Guest'); // Fallback
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="home-page-container">
        <h1 className="welcome-heading">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="home-page-container">
      <h1 className="welcome-heading">HI {userName.toUpperCase()}!</h1>

      <div className="subject-grid">
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