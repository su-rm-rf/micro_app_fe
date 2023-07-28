import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default () => {
  return (
    <div>
      app..
      <NavLink to="/">home</NavLink>
      <NavLink to="/my-page">my-page</NavLink>
      <Outlet />
    </div>
  )
}