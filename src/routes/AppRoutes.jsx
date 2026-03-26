import React from 'react'
import LoginPage from '../pages/LoginPage';
import Index from '../pages/Index';
import SignupPage from '../pages/SignupPage';
import Shows from '../pages/Shows';
import Seats from '../pages/Seats';
import ConfirmBooking from '../pages/ConfirmBooking';
import Theaters from '../pages/Theaters';
import MainLayout from '../layout/MainLayout';

const AppRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />
      },
      {
        path: "/index",
        element: <Index />
      },
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/shows",
        element: <Shows />
      },
      {
        path: "/theaters/:movieId",
        element: <Theaters />
      },
      {
        path: "/seats/:movieId/:theaterId/:time",
        element: <Seats />
      },
      {
        path: "/confirm-booking",
        element: <ConfirmBooking />
      }
    ]
  }
];

export default AppRoutes;