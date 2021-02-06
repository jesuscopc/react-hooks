import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">UseContext</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact className="nav-link" to="/">Home</NavLink>
            <NavLink exact className="nav-link" to="/about">About</NavLink>
            <NavLink exact className="nav-link" to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
