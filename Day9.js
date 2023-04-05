import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../pagesForDay9/Home'
import Singers from '../pagesForDay9/Singers'
import Albums from '../pagesForDay9/Albums'
import Navbar from '../pagesForDay9/Navbar'

function Day9() {
  return (
    <div>
    <h1>Day 9: </h1>
    <Navbar/>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/singers' element = {<Singers />} />
            <Route path = '/albums' element = {<Albums />} />
        </Routes>
    </div>
  )
}

export default Day9