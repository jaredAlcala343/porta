// src/components/Navbar.js
import React from 'react';

import './navbar.css';
import porfile from '../foto2.jpg'

const Navbar = () => {

  return (
    <nav className="navbar">
      <img src={porfile} alt="Jared Alcala" className="profile-pic" />
      <div className="header-text">
        <h1>Jared Alcala</h1>
        <h2>Ingeniero en Sistemas</h2>
      </div>
      <ul>
        <li href="#About">About</li>
        <li >Experiencia Profesional</li>
        <li>Projects</li>
        <li >Gallery</li>
        <li >Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
