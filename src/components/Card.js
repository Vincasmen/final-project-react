// Card.js
import React from "react";
import { CardsData } from "../data"; // Importujeme CardsData z data.js
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-container">
      {CardsData.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-content">
            <img
              src={card.image}
              alt="Product Image"
              className="product-image"
            />
            <div className="content">
              <h3 className="title">{card.title}</h3>
              <p className="description">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
