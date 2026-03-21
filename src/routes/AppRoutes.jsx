import React from 'react'
import LoginPage from '../pages/LoginPage';
import Index from '../pages/Index';
import SignupPage from '../pages/SignupPage';
import Shows from '../pages/Shows';
import Seats from '../pages/Seats';
import { Routes, Route } from 'react-router-dom';
import Theaters from '../pages/Theaters';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/shows" element={<Shows />}></Route>
        <Route path="/theaters/:movieId" element={<Theaters />}></Route>
        <Route path="/seats/:movieId/:theaterId/:time" element={<Seats />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes