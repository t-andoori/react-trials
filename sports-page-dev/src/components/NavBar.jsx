import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul
          className="nav nav-tabs d-flex justify-content-around"
          role="tablist"
        >
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/Stats.jsx">
              STATS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              to="/Records.jsx"
              role="navigation"
            >
              RECORDS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              to="/News.jsx"
              role="navigation"
            >
              NEWS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              to="/Game.jsx"
              role="navigation"
            >
              GAME
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
