import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-menu">
      <a className="navbar-brand">
          <img src="aplaudoLogoSimpleBlack900.png" 
          className="img-fluid logo-image" />      
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/signin" className="nav-link menu-item" href="#">SignIn</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link menu-item" href="#">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link menu-item" href="#">Profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;