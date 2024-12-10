import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CamperSuccess from '../views/CamperSuccess';


// Puedes agregar un componente de inicio aquí si lo deseas
const AppRouter = () => (
  <Routes>
    <Route path="/camperSuccess" element={<CamperSuccess/>} />
  </Routes>
);

export default AppRouter;
