import React from "react";


const NavBar = () => {
    return (
        <footer>
            <h1 class="nav-head">Habitlings</h1>
            <nav class="nav-menu">
                <button class="nav-opt">create habitling</button>
                <button class="nav-opt">view progress</button>
                <button class="nav-opt">manage tasks</button>
            </nav>
        </footer>
    );
};

export default NavBar;