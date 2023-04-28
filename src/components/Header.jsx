import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li key={1}><NavLink to="/">Home</NavLink></li>
          <li key={2}><NavLink to="/search">Search</NavLink></li>
          <li key={3}><NavLink to="/saves">Saved Articles</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
