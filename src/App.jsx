import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import PLaybackPage from './pages/PLaybackPage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/video/:id' element={<PLaybackPage />} />
      </Routes>
    </Router>
  )
}

export default App
