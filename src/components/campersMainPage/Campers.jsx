import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ButonrightImg from "../../assets/ButtonRight.png";
import ButonleftImg from "../../assets/Buttonleft.png";
import campersData from "../../api/camperSucess";
import "./styles/Campers.css";

const Campers = ({ autoSlide = true, slideInterval = 5000 }) => {
  const containerRef = useRef(null);
  const [data, setData] = useState(campersData);
  const [activeIndex, setActiveIndex] = useState(0);

  const slide = (direction) => {
    const container = containerRef.current;
    const maxIndex = data.length - 1;

    let newIndex = activeIndex;
    if (direction === "right") {
      newIndex = activeIndex === maxIndex ? 0 : activeIndex + 1;
    } else if (direction === "left") {
      newIndex = activeIndex === 0 ? maxIndex : activeIndex - 1;
    }

    setActiveIndex(newIndex);
    container.scrollTo({
      left: newIndex * 300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      slide("right");
    }, slideInterval);

    return () => clearInterval(interval);
  }, [activeIndex, autoSlide, slideInterval]);

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
      </div>
    ));

  return (
    <div className="container">
      <img className="sec-title" src="/src/assets/campersexitosos.png" alt=""/>
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

Campers.propTypes = {
  autoSlide: PropTypes.bool,
  slideInterval: PropTypes.number,
};

export default Campers;
