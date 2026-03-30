import React from 'react'
import { NavLink } from 'react-router-dom'

const TestDefult = () => {
  return (
    <div>
      <NavLink to="/login">login</NavLink>
      <NavLink to="/register">register</NavLink>
    </div>
  )
}

export default TestDefult
