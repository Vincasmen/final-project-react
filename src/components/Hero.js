import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [texts, setTexts] = useState([
    "During the summer holidays, my family and I went camping in the mountains.",
    "After months of hard work, she finally took a well-deserved vacation to explore exotic destinations.",
    "The holiday season is a time for reconnecting with loved ones and creating cherished memories together.",
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
        <h1 className="main-heading">Holidays</h1>
        <p>{currentText}</p>
      </div>
    </div>
  );
};

export default Hero;
