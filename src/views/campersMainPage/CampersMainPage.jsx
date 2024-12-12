import React from 'react';
import Campers from '../../components/campersMainPage/Campers';
import Footer from '../../components/footer/Footer';

import MainCampers from '../../components/campersMainPage/MainCampers';
import "./styles/CampersMainPage.css";

const CampersMainPage = () => {
  return (
    <div className="camper-success-view">
      <main>
      <MainCampers />
      <Campers />
      </main>
      <Footer />
    </div>
  );
};

export default CampersMainPage;
