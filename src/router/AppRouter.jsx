import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CamperSucces from '../components/CamperSucess';


// Puedes agregar un componente de inicio aquí si lo deseas
const AppRouter = () => (
  <Routes>
    {/* Rutas relacionadas con el login y registro */}
    <Route path="/" element={<Login />} />
    
    {/* Rutas relacionadas con la tienda y categorías */}
    <Route path="/camperSucces" element={<CamperSucces />} />

    {/* Ruta por defecto */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRouter;
