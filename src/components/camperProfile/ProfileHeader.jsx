import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Mail, MapPin, Cake, Trophy } from 'lucide-react';
import './styles/ProfileHeader.css';

const ProfileHeader = ({ skills, name, ciudadOrigen, edad, mainImage }) => {
  const [showAllBadges, setShowAllBadges] = useState(false);
  const maxVisibleBadges = 6;

  const handleToggleBadges = () => {
    setShowAllBadges((prev) => !prev);
  };

  return (
    <motion.div 
      className="profile-header"
      initial={false}
      animate={{ height: 'auto' }} // Deja que Framer Motion calcule automáticamente
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      layout // Framer Motion ajustará automáticamente el diseño
    >
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-image">
            <img src={mainImage} className="profile-image-content" alt="Profile" />
          </div>
          <div className="profile-details">
            <h1 className="profile-name">{name}</h1>
            <div className='camper-details'>
              <div className='profile-city'>
                <MapPin /><p>{ciudadOrigen}</p>
              </div>
              <div className='profile-age'>
                <Cake /><p>{edad} Años</p>
              </div>
            </div>
            <div className="profile-buttons">
              <button className="profile-button">
                <Mail className="profile-icon" />
                Contactar
              </button>
              <button className="profile-button">
                <Share2 className="profile-icon" />
                Compartir
              </button>
            </div>
          </div>
        </div>
        <motion.div
          className='profile-badges-box'
          layout
          initial={false}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="badges-title"><Trophy /> <p>Méritos</p></div>
          <div className="badges-container">
            {skills && skills.slice(0, showAllBadges ? skills.length : maxVisibleBadges).map((skill, index) => (
              <div key={index} className="skill-item">
                {skill.name}
              </div>
            ))}
          </div>
          {skills && skills.length > maxVisibleBadges && (
            <div className="toggle-badges-button" onClick={handleToggleBadges}>
              {showAllBadges ? 'Ver menos' : 'Ver más'}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;
