import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/navbar.css'
import logo from '../img/logo.jpg';
const Navbar = () => {
  return (
    <div>
        
  <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
    {<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img id="logo" src={logo} alt="not displayed"/>
    <NavLink className="navbar-brand" to="/"></NavLink>
    


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/search">CANDIDATE SEARCH</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            REGISTER / LOGIN
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/register">REGISTER</NavLink></li>
            <li><NavLink className="dropdown-item" to="/login">LOGIN</NavLink></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
}
  </nav>
  
</div>

  )
}

export default Navbar