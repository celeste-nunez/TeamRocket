// add react from the system
import React from "react";
// add Link from react system
// Link allows links to be inserted to different pages
import { Link } from "react-router-dom"; 
// add the css for the nav bar
import './NavBar.css';

// generate the HTML for the nav bar, with links
const NavBar = () => {
    return (
        <footer>
            <h1 className="nav-head">Habitlings</h1>
            <nav className="nav-menu">
                <Link to="/" className="nav-opt">Home Page</Link>
                <Link to="/Habitling" className="nav-opt">Habitling Zoo</Link>
                <Link to="/AboutUs" className="nav-opt">About the Creators</Link>
            </nav>
        </footer>
    );
};

// return the HTML generator
export default NavBar;