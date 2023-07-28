import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import MyPage from './my-page'

export default function AppRoute() {
  console.log('window.__MICRO_APP_BASE_ROUTE__', window.__MICRO_APP_BASE_ROUTE__)
  return (
    <BrowserRouter basename={ window.__MICRO_APP_BASE_ROUTE__ || '/'}>
      <Routes>
        <Route path="/" element={ <App />} />
        <Route path="/my-page" element={ <MyPage />} />
      </Routes>
    </BrowserRouter>
  )
}