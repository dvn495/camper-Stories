import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CampersMainPage from '../views/campersMainPage/CampersMainPage';
import CamperProfile from '../views/camperProfile/CamperProfile';


// Puedes agregar un componente de inicio aquí si lo deseas
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<CampersMainPage/>} /> {/* se cambia la ruta a /, para que por defecto lo que cargue sea la pagina principal */}
    <Route path="/profile" element={<CamperProfile />} /> {/* Nueva ruta */}
  </Routes>
);

export default AppRouter;
