import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Importa framer-motion
import Logo from '../../assets/Logo.png';

import './styles/MainCampers.css';
import profiles from '../../api/camperProfile';

const MainCampers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const prevProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length);
  };

  return (
    <div className="developer-profiles">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="profile-card">
        <AnimatePresence mode="wait">
          {/* Animación del perfil */}
          <motion.div
          key={profiles[currentIndex].id}
          className="camper-img-frame"
          initial={{ rotate: 20, opacity: 0 }} // Gira desde 90 grados
          animate={{ rotate: 0, opacity: 1 }}  // Termina sin rotación
          exit={{ rotate: -45, opacity: 0 }}   // Al salir, gira hacia el lado opuesto
          transition={{ duration: 0.6, ease: "easeOut" }} // Control de suavidad
        >
            <img className="camper" src={profiles[currentIndex].image} alt={profiles[currentIndex].name} />
            <img className="camper-frame" src="/src/assets/mainFrame.png" alt="" />
          </motion.div>
        </AnimatePresence>

        {/* Contenido del perfil */}
        <motion.div
          key={`name-${profiles[currentIndex].id}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="profile-card-content">
            <h2>{profiles[currentIndex].name}</h2>
            <h4>{profiles[currentIndex].title}</h4>
            <p>{profiles[currentIndex].description}</p>
            <div className="profile-card-signature">
              <p>{profiles[currentIndex].name}</p>
            </div>
            <button className="profile-card-button">{profiles[currentIndex].buttonText}</button>
            <div className="profile-card-nav">
              <button className="profile-card-nav-button" onClick={prevProfile}>←</button>
              <button className="profile-card-nav-button" onClick={nextProfile}>→</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainCampers;
