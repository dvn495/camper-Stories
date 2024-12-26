import React, { useState } from 'react';
import './styles/Navbar.css';
import campusLogo from '../../assets/campus.svg';
import campusLogoCompleto from '../../assets/CampusLogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links left-links">
          <li className="hidden-links">
            <a href="#mainCampers" onClick={handleLinkClick}>Inicio</a>
          </li>
          <li className="hidden-links">
            <a href="#campers" onClick={handleLinkClick}>Historias</a>
          </li>
        </ul>
        <div className="navbar-logo">
            <a href="#mainCampers" onClick={handleLinkClick}>
                <img src={campusLogo} alt="Campus Logo" />
            </a>
        </div>
        <div className='navbar-hamburguesa-logo'>
            <a href="#mainCampers" onClick={handleLinkClick}>
                <img src={campusLogoCompleto} alt="Campus Logo" />
            </a>
        </div>
        <ul className="navbar-links right-links">
          <li className="hidden-links">
            <a href="#campersGrid" onClick={handleLinkClick}>Campers</a>
          </li>
          <li className="hidden-links">
            <a href="#formSection" onClick={handleLinkClick}>Donar</a>
          </li>
        </ul>
        <button className={`hamburger-menu ${isMenuOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-icon"></span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            <li>
              <a href="#mainCampers" onClick={handleLinkClick}>Inicio</a>
            </li>
            <li>
              <a href="#campers" onClick={handleLinkClick}>Historias</a>
            </li>
            <li>
              <a href="#campersGrid" onClick={handleLinkClick}>Campers</a>
            </li>
            <li>
              <a href="#formSection" onClick={handleLinkClick}>Donar</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
