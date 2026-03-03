import React from 'react'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import Index from './pages/Index'
import {BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginPage/>}></Route>
        <Route path='/index ' element={ <Index/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App