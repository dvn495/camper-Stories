import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import CampersMainPage from '../views/campersMainPage/CampersMainPage';
import CamperProfile from '../views/camperProfile/CamperProfile';
import LoginPage from '@/views/LoginPage/LoginPage';
import Unauthorized from '@/views/Unauthorized/Unauthorized';
import DynamicTitle from './DynamicTitle'; // Importa el componente
import RegisterPage from '@/views/RegisterPage/RegisterPage';

const AppRouter = () => {
  return (
    <>
      <DynamicTitle />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<CampersMainPage />} />
        <Route path="/campers/login" element={<LoginPage />} />
        <Route path="/campers/register" element={<RegisterPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        

        <Route
          path="/profile"
          element={
            <ProtectedRoute allowedRoles={['USER', 'ADMIN']}>
              <CamperProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute allowedRoles={['USER', 'ADMIN']}>
              <CamperProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;