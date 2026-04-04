import React from 'react'
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
  e.preventDefault()
  await logout()
  navigate('/login')
}
  return (
    <div>
      <form action="" onSubmit={handleLogout}>
        <input type="submit" value="Logout" className='bg-red-500'/>
      </form>
    </div>
  )
}

export default Dashboard
