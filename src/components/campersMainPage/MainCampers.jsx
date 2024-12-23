import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Logo from '../../assets/Logo.png';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles/MainCampers.css';
import profiles from '../../api/camperProfile';

const MainCampers = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Forzar actualización del Swiper cuando cambia isMobile
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, [isMobile]);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const slide = (direction) => {
    setCurrentIndex((prev) =>
      direction === 'right'
        ? (prev + 1) % profiles.length
        : (prev - 1 + profiles.length) % profiles.length
    );
  };

  const renderContent = (profile) => (
    <div className="profile-content-wrapper">
      <motion.div
        className="camper-img-frame"
        initial={{ rotate: 20, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: -45, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img className="camper" src={profile.image} alt={profile.name} />
        <img className="camper-frame" src="/src/assets/mainFrame.png" alt="" />
      </motion.div>

      <motion.div
        className="profile-card-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7 }}
      >
        <h2>{profile.name}</h2>
        <h4>{profile.title}</h4>
        <p>{profile.description}</p>
        <div className="profile-card-signature">
          <p>{profile.name}</p>
        </div>
        <button className="profile-card-button">{profile.buttonText}</button>
        <div className="profile-card-nav">
          <button
            className="profile-card-nav-button"
            onClick={() => slide('left')}
            aria-label="Anterior"
          >
            <ChevronLeft size={54} />
          </button>
          <button
            className="profile-card-nav-button"
            onClick={() => slide('right')}
            aria-label="Siguiente"
          >
            <ChevronRight size={54} />
          </button>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="developer-profiles">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="profile-card">
        {isMobile ? (
          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            onSlideChange={handleSlideChange}
            className="mobile-swiper"
          >
            {profiles.map((profile) => (
              <SwiperSlide key={profile.id}>
                {renderContent(profile)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={profiles[currentIndex].id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7 }}
            >
              {renderContent(profiles[currentIndex])}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default MainCampers;
