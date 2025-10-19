import React from "react";
import "./footer.css";
import flowers from "../assets/flowers.png"; // Import the image properly

const Footer = () => {
  return (
    <footer
      className="flower-footer"
      style={{
        backgroundImage: `url(${flowers}), url(${flowers})`,
      }}
    ></footer>
  );
};

export default Footer;
