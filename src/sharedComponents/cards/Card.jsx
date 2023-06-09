import React from "react";
import "./Card.css";

const Card = ({ imageSrc, description, buttonLabel, buttonLink }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt="Card" />
      <div className="card-description">{description}</div>
      <a href={buttonLink} className="card-button">
        {buttonLabel}
      </a>
    </div>
  );
};

export default Card;
