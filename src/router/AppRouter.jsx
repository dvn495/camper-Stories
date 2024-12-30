import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import CampersMainPage from '../views/campersMainPage/CampersMainPage';
import CamperProfile from '../views/camperProfile/CamperProfile';
import LoginPage from '@/views/LoginPage/LoginPage';
import Unauthorized from '@/views/Unauthorized/Unauthorized';

const AppRouter = () => (
  <Routes>
    
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/" element={<CampersMainPage />} />
    <Route path="/login" element={<LoginPage />} />
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
);

export default AppRouter;
