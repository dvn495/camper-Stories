import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CampersMainPage from '../views/campersMainPage/CampersMainPage';
import CamperProfile from '../views/camperProfile/CamperProfile';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<CampersMainPage />} />
    <Route path="/profile" element={<CamperProfile />} />
    <Route path="/profile/:id" element={<CamperProfile />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRouter;
