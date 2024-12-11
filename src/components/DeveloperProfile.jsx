import React, { useState } from 'react';
import '../styles/DeveloperProfiles.css'; // Asegúrate de que este archivo exista o corrige la ruta

import profiles from '../data/camperProfile'; // Importar la constante profiles

const DeveloperProfiles = ({ apiImage }) => {
  // Estado para controlar el índice del perfil actual
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const prevProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length);
  };

  return (
    <div className="developer-profiles">
      <div className="profile-card" key={profiles[currentIndex].id}>
        <img className="camper" src={profiles[currentIndex].image} alt={`${profiles[currentIndex].name}'s profile`} />
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
      </div>
    </div>
  );
};

export default DeveloperProfiles;
