import React from 'react';
import MainCampers from '../../components/campersMainPage/MainCampers';
import Campers from '../../components/campersMainPage/Campers';
import CampersGrid from '../../components/campersMainPage/CampersGrid';
import FormSection from '../../components/campersMainPage/FormSection';
import Footer from '../../components/footer/Footer';
import "./styles/CampersMainPage.css";

const CampersMainPage = () => {
  return (
    <div className="camper-success-view">
      <MainCampers />
      <Campers />
      <CampersGrid />
      <FormSection />
      <Footer />
    </div>
  );
};

export default CampersMainPage;
