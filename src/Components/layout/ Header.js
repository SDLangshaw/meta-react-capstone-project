import React from 'react';
import logoImage from './assets/logo.png';
import './Header.css';
import Nav from '../Nav';


const  Header = () => {
    return (
        <header>
        <img className="nav-bar-logo" src={logoImage} alt="Little Lemon logo" />
        <Nav />
        {/* <nav className="container grid nav-bar">
          <ul className="nav-bar-links">


          </ul>
        </nav> */}
      </header>
    );
};

export default  Header;