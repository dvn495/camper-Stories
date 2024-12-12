import React from 'react';
import MainCampers from '../../components/campersMainPage/MainCampers';
import Campers from '../../components/campersMainPage/Campers';
import CampersGrid from '../../components/campersMainPage/CampersGrid';
import Footer from '../../components/footer/Footer';
import "./styles/CampersMainPage.css";

const CampersMainPage = () => {
  return (
    <div className="camper-success-view">
      <main>
      <MainCampers />
      <Campers />
      <CampersGrid />
      </main>
      <Footer />
    </div>
  );
};

export default CampersMainPage;
