import React, { useState } from "react";
import "../styles/camperSucces.css";
import campersData from "../data/camperSucess";
import ButonrightImg from "../assets/ButtonRight.png";
import ButonleftImg from "../assets/Buttonleft.png";

const CamperSuccess = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + campersData.length) % campersData.length);
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % campersData.length);
  };

  return (
    <div className="container">
      <div className="title">
        <h2>CAMPERS</h2>
        <h1>EXITOSOS</h1>
      </div>
      <div className="cards-container">
        {campersData.map((camper, index) => {
          // Calculamos los índices que deberían agrandarse
          const isLarge = 
            index === (currentIndex % campersData.length) ||
            index === ((currentIndex + 1) % campersData.length) ||
            index === ((currentIndex + 2) % campersData.length) ||
            index === ((currentIndex + 3) % campersData.length);

          return (
            <div
              key={camper.id}
              className={`card ${isLarge ? "card-large" : ""}`}
            >
              <div className="perfil">
                <img src={camper.image} alt={camper.name} className="card-image" />
              </div>
              <div className="card-content">
                <h3>{camper.name}</h3>
                <h4>{camper.role}</h4>
                <p>{camper.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="navigation">
        <button className="nav-button" onClick={slideLeft}>
          <img src={ButonleftImg} alt="Left" />
        </button>
        <button className="nav-button" onClick={slideRight}>
          <img src={ButonrightImg} alt="Right" />
        </button>
      </div>
    </div>
  );
};

export default CamperSuccess;
