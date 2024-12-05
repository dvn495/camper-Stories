import React, { useRef, useState, useEffect } from "react";
import ButonrightImg from "../assets/ButtonRight.png";
import ButonleftImg from "../assets/Buttonleft.png";
import campersData from "../data/camperSucess";
import "../styles/camperSucces.css";

const CamperSuccess = () => {
  const containerRef = useRef(null);
  const [data, setData] = useState(campersData);
  const [scrolling, setScrolling] = useState(false);

  // Aplicar el margen inferior a las tarjetas dentro del rango visible al cargar la página
  useEffect(() => {
    const container = containerRef.current;
    const cardWidth = 100; // Ajusta según el ancho de tu card
    const containerWidth = container.offsetWidth;

    // Calculamos cuántas cards caben en el contenedor
    const visibleCardsCount = Math.floor(containerWidth / cardWidth);

    const centerPosition = container.scrollLeft + containerWidth / 2;
    const startRange = centerPosition - (visibleCardsCount / 2) * cardWidth;
    const endRange = centerPosition + (visibleCardsCount / 2) * cardWidth;

    const cards = document.querySelectorAll(".card");
    let cardsInRange = [];

    // Detectar las cards dentro del rango visible
    cards.forEach((card) => {
      const cardLeft = card.offsetLeft + cardWidth / 2;
      if (cardLeft >= startRange && cardLeft <= endRange) {
        cardsInRange.push(card);
      }
    });

    // Aplicar el margen inferior a las tarjetas dentro del rango visible
    cardsInRange.forEach((card, index) => {
      if (index !== 0 && index !== cardsInRange.length - 1) {
        card.classList.add("apply-margin-bottom");
      }
    });
  }, []);

  const slide = (direction) => {
    if (scrolling) return;
    setScrolling(true);
    const container = containerRef.current;
    const cardWidth = 300;
    const distance = direction === "right" ? cardWidth : -cardWidth;

    // Desplazar hacia la izquierda o derecha
    container.scrollBy({ left: distance, behavior: "smooth" });

    // Si nos desplazamos hacia la izquierda y estamos al inicio, agregar más datos al principio
    if (direction === "left" && container.scrollLeft === 0) {
      // Si estamos al inicio, agregamos las cards al principio, asegurándonos de no duplicarlas
      setData((prevData) => {
        const newCards = campersData.slice(0, 3); // Agregar solo 3 cards al principio (ajustar según sea necesario)
        return [...newCards, ...prevData];
      });
      // Para mantener la posición del scroll correcta, desplazamos el contenedor
      container.scrollLeft = cardWidth;
    }

    // Si llegamos al final y nos desplazamos a la derecha, agregar más datos
    if (direction === "right" && container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      setData((prevData) => [...prevData, ...campersData]); // Agregar más al final
    }

    setTimeout(() => setScrolling(false), 500);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const cardWidth = 100; // Ajusta según el ancho de tu card
    const containerWidth = container.offsetWidth;

    // Calculamos cuántas cards caben en el contenedor
    const visibleCardsCount = Math.floor(containerWidth / cardWidth);

    const centerPosition = container.scrollLeft + containerWidth / 2;
    const startRange = centerPosition - (visibleCardsCount / 2) * cardWidth;
    const endRange = centerPosition + (visibleCardsCount / 2) * cardWidth;

    const cards = document.querySelectorAll(".card");
    let cardsInRange = [];

    // Detectar las cards dentro del rango visible
    cards.forEach((card) => {
      const cardLeft = card.offsetLeft + cardWidth / 2;
      if (cardLeft >= startRange && cardLeft <= endRange) {
        cardsInRange.push(card);
      }
    });

    // Limpiar las clases primero
    cards.forEach((card) => {
      card.classList.remove("apply-margin-bottom");
      card.classList.remove("gradient-card");
      card.classList.remove("shadow-card");
    });

    // Aplicar margen a las cards excepto la primera y la última dentro del rango
    if (cardsInRange.length > 2) {
      cardsInRange.forEach((card, index) => {
        if (index !== 0 && index !== cardsInRange.length - 1) {
          card.classList.add("apply-margin-bottom");
        }
      });
    }

    // Aplicar el gradiente y la sombra a las cards que no tienen "margin-bottom"
    cards.forEach((card) => {
      if (!card.classList.contains("apply-margin-bottom")) {
        card.classList.add("gradient-card");
        card.classList.add("shadow-card");
      }
    });

    // Función para detectar cuando el último card es visible y agregar más cards
    const isEndOfScroll =
      container.scrollLeft + container.offsetWidth >= container.scrollWidth;

    // Si llegamos al final, agregar más datos al final
    if (isEndOfScroll) {
      setData((prevData) => [...prevData, ...campersData]);
    }
  };

  // Añadir event listener para el scroll
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className="container">
      <div className="title">
        <h2>CAMPERS</h2>
        <h1>EXITOSOS</h1>
      </div>
      <div className="cards-container-wrapper">
        <div className="cards-container" ref={containerRef}>
          {generateInfiniteCards()}
        </div>
      </div>
      <div className="navigation">
        <button className="nav-button" onClick={() => slide("left")}>
          <img src={ButonleftImg} alt="Left" />
        </button>
        <button className="nav-button" onClick={() => slide("right")}>
          <img src={ButonrightImg} alt="Right" />
        </button>
      </div>
    </div>
  );
};

export default CamperSuccess;