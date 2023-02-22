import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


function Header() {
  return (
    <div className="header">
         <img
          src="https://cdn.paysecurely.online/assets/media/logos/secure.c2c.education/logo.png"
          alt="Secure C2C Education Logo"
          className="logo"
        ></img>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Orders</a></li>
       
        <li><a href="#">Review</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="search">
        <SearchIcon label="icon"/>
        <TextField id="filled-basic" label="Search" variant="filled" />
      </div>
    </div>
  );
}

export default Header;
