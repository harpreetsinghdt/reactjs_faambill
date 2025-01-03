import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // State to track whether the navbar is collapsed or expanded
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  // Toggle function to handle the button click
  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Sliprecs
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar} // Toggle the navbar on button click
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavbarCollapsed ? "" : "show"
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/" onClick={toggleNavbar}>
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/login" onClick={toggleNavbar}>
                  Login
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/signup" onClick={toggleNavbar}>
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
