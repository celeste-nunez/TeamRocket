import React from "react";


const NavBar = () => {
    return (
        <footer>
            <h1 className="nav-head">Habitlings</h1>
            <nav className="nav-menu">
                <button className="nav-opt">create habitling</button>
                <button className="nav-opt">view progress</button>
                <button className="nav-opt">manage tasks</button>
            </nav>
        </footer>
    );
};

export default NavBar;