import React from 'react'
// import "./index.css"
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import Room from './pages/Room'
import LoginPage from './pages/LoginPage'
import PrivateRoutes from './components/PrivateRoutes'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Room />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
