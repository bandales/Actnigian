import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import HomePage from './HomePage'
import PriceChecker from './PriceChecker'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="price-checker" element={<PriceChecker />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
