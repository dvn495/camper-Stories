import React, { useRef, useState, useEffect } from "react";
import campersData from "../../api/camperSucess";
import "./styles/Campers.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Campers = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleCampers = () => {
    if (isMobile) {
      return [{
        ...campersData[currentIndex],
        cardType: 'center'
      }];
    }

    const visibleCards = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % campersData.length;
      visibleCards.push({
        ...campersData[index],
        cardType: i === 0 || i === 5 ? 'edge' :
                 i === 1 || i === 4 ? 'adjacent' :
                 'center'
      });
    }
    return visibleCards;
  };

  const slide = (direction) => {
    if (scrolling) return;
    setScrolling(true);

    setCurrentIndex((prevIndex) => {
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
        className={`card ${camper.cardType}-card`}
        onClick={() => {
          // Si es la primera tarjeta (index 0), deslizar a la izquierda
          // Si es la última tarjeta (index 5), deslizar a la derecha
          if (index === 0) {
            slide("left");
          } else if (index === 5) {
            slide("right");
          }
        }}
        style={{ 
          cursor: (index === 0 || index === 5) ? 'pointer' : 'default' 
        }}
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
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slide("right");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="campers-container">
      <div className="title-campers">
        <h3>Campers</h3>
        <h2> exitosos</h2>
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
