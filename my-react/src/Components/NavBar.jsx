import React from "react";
import { Link } from "react-router-dom"; 
import './NavBar.css';

const NavBar = () => {
    return (
        <footer>
            <h1 className="nav-head">Habitlings</h1>
            <nav className="nav-menu">
                <Link to="/" className="nav-opt">Home Page</Link>
                <Link to="/HabitlingZoo" className="nav-opt">Habitling Zoo</Link>
                <Link to="/AboutUs" className="nav-opt">About the Creators</Link>
            </nav>
        </footer>
    );
};

export default NavBar;