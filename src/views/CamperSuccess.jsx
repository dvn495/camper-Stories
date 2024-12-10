import React from 'react';
import Campers from '../components/Campers';
import Footer from '../components/Footer';
import Logo from '../assets/Logo.png';
import "../styles/CamperSuccess.css";

const CamperSuccess = () => {
  return (
    <div className="camper-success-view">
      <img src={Logo} alt="Logo" className="logo" />
      <main>
        <Campers />
      </main>
      <Footer />
    </div>
  );
};

export default CamperSuccess;
