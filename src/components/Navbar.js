import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/form" activeclassname="active">
            Form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
