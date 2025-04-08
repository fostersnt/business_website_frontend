import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="">
      <div className="">Exclusive</div>
      <ul className="">
        <NavLink className="navLink" to={'/dashboard'}>Home</NavLink>
        <NavLink className="navLink" to={'/dashboard'}>Contact</NavLink>
        <NavLink className="navLink" to={'/dashboard'}>About</NavLink>
        <NavLink className="navLink" to={'/dashboard'}>Sign Up</NavLink>
      </ul>
      <div className="">
        <input type="text" placeholder="Search" className="border rounded px-2 py-1" />
        <span>❤️</span>
        <span>🛒</span>
      </div>
    </nav>
  );
}
