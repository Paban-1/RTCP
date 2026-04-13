import React from 'react'
// import "./index.css"
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import Room from './pages/Room'
import LoginPage from './pages/LoginPage'
import PrivateRoutes from './components/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route element={<PrivateRoutes />}>
              <Route path='/' element={<Room />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
