import React from 'react';
import logoImage from './assets/logo.png';

// Define the CSS style as a variable
const listStyle = {
    listStyleType: 'none', // Removes the dot from the unordered list
    display: 'flex', // Display the list items horizontally
    alignItems: 'center', // Align items vertically in the center
    //justifyContent: 'space-between', // Add space between items
    justifyContent: 'space-around', // Add space around items
};

const Nav = () => {
    return (
        <nav className="container grid nav-bar">
            <img src={logoImage} alt="Little Lemon logo" />
            <ul style={listStyle}> {/* Apply the CSS style using the variable */}
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;