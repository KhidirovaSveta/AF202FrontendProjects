import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="container">
      <div id="header">
        <ul>
          <li>
            <NavLink className="navBar" to={"/signin"}>
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink className="navBar" to={"/"}>
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink className="navBar" to={"/users"}>
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
