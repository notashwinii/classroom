import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './student/Navbar'

const Userlayout = () => {
  return (
    <div className=''>
  
    <Outlet/>
    </div>
  )
}

export default Userlayout;