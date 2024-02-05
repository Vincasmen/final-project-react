import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [texts, setTexts] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Suspendisse potenti. Sed vel nisi commodo, gravida mi id, lacinia tortor.",
    "Praesent euismod justo eget dui condimentum tempus.",
  ]);

  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    setCurrentText(generateRandomText());
  }, []);

  const generateRandomText = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  };

  return (
    <div className="hero-container">
      <div className="intro-section">
        <img src="path_to_your_image.jpg" alt="" className="intro-image" />
        <h1 className="main-heading">Budoucnost na počkání</h1>
        <p>{currentText}</p>
      </div>
    </div>
  );
};

export default Hero;
