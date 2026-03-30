import React from 'react'
import {  RegisterPage, Navbar, ContactBar, ProfileBar, AppRouter } from "./constent"
import { AuthProvider } from "./context/authContext"

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
