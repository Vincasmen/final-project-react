// Error.jsx
import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <h1>Oops! Stránka nenalezena</h1>
      <p>Omlouváme se, ale stránka, kterou hledáte, nebyla nalezena.</p>
      <p>Zkuste prosím jinou adresu.</p>
    </div>
  );
};

export default Error;
