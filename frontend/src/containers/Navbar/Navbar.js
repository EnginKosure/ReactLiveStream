import React from "react";
import { NavLink } from "react-router-dom";

import './Navbar.scss';

const Navbar = () => {
  return (
   <div className="Navbar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-menu">
      <a className="navbar-brand">
        <img
          src="aplaudoLogoSimpleBlack900.png"
          className="img-fluid logo-image"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/signin" className="nav-link menu-item">
              Sign in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link menu-item">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link menu-item">
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;
