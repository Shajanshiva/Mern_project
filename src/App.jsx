import React from 'react'
import LoginPage from './pages/LoginPage'
import Index from './pages/Index'
import SignupPage from './pages/SignupPage'
import {BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginPage/>}></Route>
        <Route path='/index' element={<Index />}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App