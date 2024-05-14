import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {

  return (
    <>
    <Navbar />

        <Outlet></Outlet>
    
    <Footer />
    </>
  )
}

export default Layout