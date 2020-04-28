import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "../Clock/Clock";

class NavBar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <nav>
          <div className="navbar nav-tabs" id="nav-tab" role="tablist">
            <NavLink
              className="nav-item nav-link"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              to="/Nasdaq"
            >
              Nasdaq
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
              to="/Dow"
            >
              Dow
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
              to="/Russell"
            >
              Russell
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
              to="/SP500"
            >
              S&P 500
            </NavLink>
            <Clock className="navbar-text" />
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            ...
          </div>

          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            ...
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
