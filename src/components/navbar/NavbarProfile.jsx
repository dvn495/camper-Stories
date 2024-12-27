import React, { useState } from 'react';
import './styles/NavbarProfile.css';
import campusLogo from '../../assets/campus.svg';
import campusLogoCompleto from '../../assets/CampusLogo.png';

const NavbarProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-profile">
      <div className="navbar-container">
        <ul className="navbar-links left-links">
          <li className="hidden-links">
            <a href="/" onClick={handleLinkClick}>Sobre mi</a>
          </li>
        </ul>
        <ul className="navbar-links left-links">
          <li className="hidden-links">
            <a href="/" onClick={handleLinkClick}>Proceso</a>
          </li>
        </ul>
        <ul className="navbar-links left-links">
          <li className="hidden-links">
            <a href="/" onClick={handleLinkClick}>Sueños</a>
          </li>
        </ul>
        <div className="navbar-logo">
          <a href="/">
            <img src={campusLogo} alt="Campus Logo" />
          </a>
        </div>
        <div className='navbar-hamburguesa-logo'>
          <a href="/">
            <img src={campusLogoCompleto} alt="Campus Logo" />
          </a>
        </div>
        <ul className="navbar-links right-links">
          <li className="hidden-links">
            <a href="#formSection" onClick={handleLinkClick}>Proyectos</a>
          </li>
        </ul>
        <ul className="navbar-links right-links">
          <li className="hidden-links">
            <a href="/" onClick={handleLinkClick}>Patrocinar</a>
          </li>
        </ul>
        <ul className="navbar-links right-links">
          <li className="hidden-links">
            <a href="/" onClick={handleLinkClick}>Contactanos</a>
          </li>
        </ul>
        <button className={`hamburger-menu ${isMenuOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-icon"></span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            <li><a href="/" onClick={handleLinkClick}>Volver</a></li>
            <li><a href="#formSection" onClick={handleLinkClick}>Patrocinar</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarProfile;