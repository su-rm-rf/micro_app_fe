import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

export default () => {
  return (
    <div className="app">
      <div className="header">
        <h3>主应用app</h3>
      </div>
      <div className="main">
        <nav className="aside">
          <NavLink to="/child-vue">子应用vue</NavLink>
          <NavLink to="/child-react">子应用react</NavLink>
        </nav>
        <div className="body">
          <Outlet />
        </div>
      </div>
    </div>
  )
}