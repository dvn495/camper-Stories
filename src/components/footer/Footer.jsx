import React from 'react';
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className='footer-container'>
        <img src="src/assets/CampusLogo.png" alt="Campuslands" />
        <div className='line'></div>
        <div className='underline-content'>
          <p>© Campus 2024 - Todos los derechos Reservados</p>
          <div className='social-logos'>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
