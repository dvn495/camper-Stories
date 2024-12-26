import React, { useRef, useState, useEffect } from "react";
import campersData from "../../api/camperSucess";
import "./styles/Campers.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Campers = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const intervalRef = useRef(null);

  // Mínima distancia requerida para considerar un swipe (en píxeles)
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCampers = () => {
    if (isMobile) {
      return [
        {
          ...campersData[currentIndex],
          cardType: "center",
        },
      ];
    }

    const visibleCards = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % campersData.length;
      visibleCards.push({
        ...campersData[index],
        cardType:
          i === 0 || i === 5
            ? "edge"
            : i === 1 || i === 4
            ? "adjacent"
            : "center",
      });
    }
    return visibleCards;
  };

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      slide("right");
    }, 5000);
  };

  const slide = (direction) => {
    if (scrolling) return;
    setScrolling(true);

    const container = containerRef.current;
    container.classList.add(direction === 'right' ? 'sliding-right' : 'sliding-left');

    setCurrentIndex((prevIndex) => {
      if (direction === "right") {
        return (prevIndex + 1) % campersData.length;
      } else {
        return prevIndex === 0 ? campersData.length - 1 : prevIndex - 1;
      }
    });

    startInterval();

    setTimeout(() => {
      setScrolling(false);
      container.classList.remove('sliding-right', 'sliding-left');
    }, 1300);
  };

  const generateCards = () => {
    return getVisibleCampers().map((camper, index) => (
      <div
        key={`${index}-${camper.name}`}
        className={`card ${camper.cardType}-card`}
        onClick={() => {
          if (index === 0) {
            slide("left");
          } else if (index === 5) {
            slide("right");
          }
        }}
        style={{
          cursor: index === 0 || index === 5 ? "pointer" : "default",
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
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      slide("right");
    } else if (isRightSwipe) {
      slide("left");
    }
  };

  return (
    <div className="campers-container">
      <div className="title-campers">
        <h3>Campers</h3>
        <h2> exitosos</h2>
      </div>
      <div
        className="cards-container-wrapper"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="cards-container" ref={containerRef}>
          {generateCards()}
        </div>
      </div>
      {!isMobile && (
        <div className="navigation">
          <button
            className="nav-button"
            onClick={() => slide("left")}
            aria-label="Deslizar a la izquierda"
          >
            <ChevronLeft size={25} />
          </button>
          <button
            className="nav-button"
            onClick={() => slide("right")}
            aria-label="Deslizar a la derecha"
          >
            <ChevronRight size={25} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Campers;
