import React, { useRef, useState, useEffect } from "react";
import ButonrightImg from "../assets/ButtonRight.png";
import ButonleftImg from "../assets/Buttonleft.png";
import campersData from "../data/camperSucess";
import "../styles/Campers.css";

const Campers = () => {
  const containerRef = useRef(null);
  const [data, setData] = useState(campersData);
  const [scrolling, setScrolling] = useState(false);

  const slide = (direction) => {
    if (scrolling) return;
    setScrolling(true);
    const container = containerRef.current;
    const cardWidth = 300;
    const distance = direction === "right" ? cardWidth : -cardWidth;

    container.scrollBy({ left: distance, behavior: "smooth" });

    if (direction === "left" && container.scrollLeft === 0) {
      setData((prevData) => [...campersData.slice(0, 3), ...prevData]);
      container.scrollLeft = cardWidth;
    }

    if (direction === "right" && container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      setData((prevData) => [...prevData, ...campersData]);
    }

    setTimeout(() => setScrolling(false), 500);
  };

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const cardWidth = 300;
      const containerWidth = container.offsetWidth;
      const visibleCardsCount = Math.floor(containerWidth / cardWidth);
      const centerPosition = container.scrollLeft + containerWidth / 2;

      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => card.classList.remove("apply-margin-bottom"));
      [...cards].forEach((card, index) => {
        const cardLeft = card.offsetLeft + cardWidth / 2;
        if (cardLeft >= centerPosition - (visibleCardsCount / 2) * cardWidth &&
            cardLeft <= centerPosition + (visibleCardsCount / 2) * cardWidth) {
          if (index !== 0 && index !== cards.length - 1) {
            card.classList.add("apply-margin-bottom");
          }
        }
      });

      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        setData((prevData) => [...prevData, ...campersData]);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const generateInfiniteCards = () =>
    data.map((camper, index) => (
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
    ));

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

export default Campers;
