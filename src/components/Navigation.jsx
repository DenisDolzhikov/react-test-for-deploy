import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink 
          to="/home" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/about"
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/posts"
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Blog
        </NavLink>
      </li>
    </ul>
  )
}

export default Navigation