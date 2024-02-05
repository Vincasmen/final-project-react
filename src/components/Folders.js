import React, { useState } from "react";
import { Signs } from "../data";
import "./Folders.css";

const Folders = () => {
  const [selectedSign, setSelectedSign] = useState(null);

  const handleClick = (signName) => {
    setSelectedSign(selectedSign === signName ? null : signName);
  };

  return (
    <div className="folders-container">
      {Signs.map((sign, index) => (
        <div key={index}>
          <h2
            className={selectedSign === sign.name ? "selected" : ""}
            onClick={() => handleClick(sign.name)}
          >
            {sign.name}
          </h2>
          <p className={selectedSign === sign.name ? "" : "hidden"}>
            {sign.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Folders;
