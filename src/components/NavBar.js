import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navBar bottom">
            <div className="buttonGroup">
                <NavLink
                    end to="/"
                    className={(navData) => (navData.isActive ? "active" : "") + " button navlink"}
                >
                    Tarefas
                </NavLink>
                <NavLink
                    to="/about"
                    //className={(navData) => (navData.isActive ? "active" : "") + " button navlink"}
                    className={({ isActive }) => "button navlink " + (isActive ? "active" : "")}
                >
                    Sobre
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;