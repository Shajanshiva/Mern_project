import React from 'react';
import LoginPage from './pages/LoginPage';
import Index from './pages/Index';
import SignupPage from './pages/SignupPage';
import Shows from './pages/Shows';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Theaters from './pages/Theaters';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/index' element={<Index />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
        <Route path='/shows' element={<Shows />}></Route>
        <Route path = '/theaters/:movieId' element={<Theaters/>}></Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;