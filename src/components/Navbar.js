import React from 'react';
import './navbar.css';

    const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};


export default Navbar;