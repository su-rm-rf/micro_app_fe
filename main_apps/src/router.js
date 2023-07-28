import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import ChildVue from './child-vue'
import ChildReact from './child-react'

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App />}>
          <Route path="/child-vue/*" element={ <ChildVue />} />
          <Route path="/child-react/*" element={ <ChildReact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}