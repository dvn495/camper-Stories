import React from 'react';
import Campers from '../components/Campers';
import Footer from '../components/Footer';
import Logo from '../assets/Logo.png';
import "../styles/CamperSuccess.css";
import DeveloperProfiles from '../components/DeveloperProfile';

const CamperSuccess = () => {
  return (
    <div className="camper-success-view">
      <img src={Logo} alt="Logo" className="logo" />
      <main>
      <DeveloperProfiles />
        <Campers />
      </main>
      <Footer />
    </div>
  );
};

export default CamperSuccess;
