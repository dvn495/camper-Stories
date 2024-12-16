import React, { useRef, useState, useEffect } from "react";
import campersData from "../../api/camperSucess";
import "./styles/Campers.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import campersTitle from "../../assets/campersexitosos.png";

const Campers = () => {
  const containerRef = useRef(null);
  const [data, setData] = useState(campersData);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const container = containerRef.current;
    const cardWidth = 100;
    const containerWidth = container.offsetWidth;

    const visibleCardsCount = Math.floor(containerWidth / cardWidth);
    const centerPosition = container.scrollLeft + containerWidth / 2;
    const startRange = centerPosition - (visibleCardsCount / 2) * cardWidth;
    const endRange = centerPosition + (visibleCardsCount / 2) * cardWidth;

    const cards = document.querySelectorAll(".card");
    let cardsInRange = [];

    cards.forEach((card) => {
      const cardLeft = card.offsetLeft + cardWidth / 2;
      if (cardLeft >= startRange && cardLeft <= endRange) {
        cardsInRange.push(card);
      }
    });

    cards.forEach((card) => {
      card.classList.remove("apply-margin-bottom");
      card.classList.remove("gradient-card");
      card.classList.remove("shadow-card");
    });

    if (cardsInRange.length > 2) {
      cardsInRange.forEach((card, index) => {
        if (index !== 0 && index !== cardsInRange.length - 1) {
          card.classList.add("apply-margin-bottom");
        }
      });
    }

    cards.forEach((card) => {
      if (!card.classList.contains("apply-margin-bottom")) {
        card.classList.add("gradient-card");
        card.classList.add("shadow-card");
      }
    });
  };

  const autoSlide = () => {
    if (scrolling) return;
    setScrolling(true);
    const container = containerRef.current;
    const cardWidth = 300; // Ancho de la tarjeta + gap

    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      setData(prevData => [...prevData, ...campersData]);
    }

    container.scrollBy({ left: cardWidth, behavior: "smooth" });
    setTimeout(() => {
      setScrolling(false);
      handleScroll(); // Llamamos a handleScroll después de cada slide
    }, 500);
  };

  // Efecto para el estilo inicial
  useEffect(() => {
    setTimeout(handleScroll, 0);
  }, []);

  // Efecto para el scroll automático
  useEffect(() => {
    const interval = setInterval(autoSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Efecto para el evento scroll
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const slide = (direction) => {
    if (scrolling) return;
    setScrolling(true);
    const container = containerRef.current;
    const cardWidth = 300;
    const distance = direction === "right" ? cardWidth : -cardWidth;

    container.scrollBy({ left: distance, behavior: "smooth" });

    if (direction === "left" && container.scrollLeft === 0) {
      setData((prevData) => {
        const newCards = campersData.slice(0, 3);
        return [...newCards, ...prevData];
      });
      container.scrollLeft = cardWidth;
    }

    if (
      direction === "right" &&
      container.scrollLeft + container.offsetWidth >= container.scrollWidth
    ) {
      setData((prevData) => [...prevData, ...campersData]);
    }

    setTimeout(() => {
      setScrolling(false);
      handleScroll(); // Llamamos a handleScroll después de cada slide manual
    }, 500);
  };

  const generateInfiniteCards = () => {
    return data.map((camper, index) => {
      return (
        <div key={index} className="card card-large">
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
      );
    });
  };

  return (
    <div className="campers-container">
      <div className="title">
        <img src={campersTitle} alt="Campers" />
      </div>
      <div className="cards-container-wrapper">
        <div className="cards-container" ref={containerRef}>
          {generateInfiniteCards()}
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
