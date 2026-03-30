import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RegisterPage, LoginPage, ContactBar, Navbar, TestDefult, Dashboard } from '../constent'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<TestDefult />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
