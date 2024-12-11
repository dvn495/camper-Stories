import React from 'react';
import { Share2, Mail } from 'lucide-react';
import './styles/ProfileHeader.css';

const ProfileHeader = ({ name, title, mainImage }) => {
  return (
    <div className="profile-header">
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-image">
            <img src={mainImage} className="profile-image-content" />
          </div>
          <div className="profile-details">
            <h1 className="profile-name">{name}</h1>
            <p className="profile-title">{title}</p>
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
      </div>
    </div>
  );
};

export default ProfileHeader;
