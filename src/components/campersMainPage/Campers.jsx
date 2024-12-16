import React, { useRef, useState, useEffect } from "react";
import campersData from "../../api/camperSucess";
import "./styles/Campers.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import campersTitle from "../../assets/campersexitosos.png";

const Campers = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  // Crear un array circular de 6 elementos
  const getVisibleCampers = () => {
    const visibleCards = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % campersData.length;
      visibleCards.push({
        ...campersData[index],
        isCenter: i > 0 && i < 5 // Los elementos 1,2,3,4 son centrales (true)
      });
    }
    return visibleCards;
  };

  const slide = (direction) => {
    if (scrolling) return;
    setScrolling(true);

    setCurrentIndex(prevIndex => {
      if (direction === "right") {
        return (prevIndex + 1) % campersData.length;
      } else {
        return prevIndex === 0 ? campersData.length - 1 : prevIndex - 1;
      }
    });

    setTimeout(() => {
      setScrolling(false);
    }, 500);
  };

  const generateCards = () => {
    return getVisibleCampers().map((camper, index) => (
      <div 
        key={`${index}-${camper.name}`} 
        className={`card ${camper.isCenter ? 'apply-margin-bottom' : 'gradient-card shadow-card'}`}
      >
        <div className="perfil">
          <img src={camper.image} alt={camper.name} className="card-image" />
        </div>
        <div className="card-content">
          <h3>{camper.name}</h3>
          <h4>{camper.role}</h4>
          <p>{camper.description}</p>
        </div>
        <div className="card-overlay"></div>
      </div>
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slide('right');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="campers-container">
      <div className="title">
        <img src={campersTitle} alt="Campers" />
      </div>
      <div className="cards-container-wrapper">
        <div className="cards-container" ref={containerRef}>
          {generateCards()}
        </div>
      </div>
      <div className="navigation">
        <button 
          className="nav-button" 
          onClick={() => slide("left")}
          aria-label="Deslizar a la izquierda"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="nav-button" 
          onClick={() => slide("right")}
          aria-label="Deslizar a la derecha"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Campers;
