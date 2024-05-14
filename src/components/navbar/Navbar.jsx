import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <section className='NavBar'>
      <div className="nav-contact">
        <div className="container-fluid">
        <div className="nav-call"> 
          <p><i className="fa-solid fa-phone"></i> Call : +01 123455678990</p>
        </div>
        <div className="nav-call">
          <p><i className="fa-solid fa-envelope"></i> Email : demo@gmail.com</p>
        </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="logo">INANCE</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink to='/' className='n-link'>Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to='/about' className='n-link' >About</NavLink >
              </li>
              <li className="nav-item">
              <NavLink to='/services' className='n-link'>Services</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to='/contact' className='n-link'>Contact Us</NavLink>
              </li>
              
            </ul>
          </div>

        </div>
      </nav>
     
    </section>


  )
}

export default Navbar