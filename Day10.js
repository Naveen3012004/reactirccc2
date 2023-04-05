import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Button } from '@mui/material'
import Navbar from '../day10pages/Navbar'
import Home from '../day10pages/Home'
import Destination from '../day10pages/Destination'
import About from '../day10pages/About'
import Contact from '../day10pages/contact'
import Registration from '../day10pages/registration'
import Submitted from '../day10pages/submitted'


function Day10() {
  return (
    <div>
    <h1>Day 10:</h1>
    <Navbar />
    <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/destination" element={<Destination />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/contact" element={<Contact />} />
        <Route path = "/registration" element={<Registration />} />
        <Route path = "/submitted" element={<Submitted />} />

    </Routes>

    </div>
  )
}

export default Day10