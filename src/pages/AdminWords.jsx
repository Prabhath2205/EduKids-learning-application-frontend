// pages/AdminWords.jsx
import React from "react";
import ItemsPage from "../components/ItemsPage";
import appleImage from "../assets/apple.png";
import ballImage from "../assets/ball.png";

const wordsData = [
  { id: 1, name: "Apple", image: appleImage },
  { id: 2, name: "Ball", image: ballImage }
];

function AdminWords() {
  return <ItemsPage title="Words" initialItems={wordsData} />;
}

export default AdminWords;
