import React, { useState } from "react";
import "./navbar.css";

const Chevron = () => (
  <svg
    className="arrow"
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="vijaya">VIJAYA</span>{" "}
        <span className="studio">STUDIO</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className="nav-content desktop-only">
        <ul className="nav-links">
          <li className="dropdown">
            <span className="dropdown-toggle">
              NEW TO THE STUDIO <Chevron />
            </span>
            <ul className="dropdown-menu">
              <li>Start Here</li>
              <li>The Classes</li>
              <li>The Instructors</li>
            </ul>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle">
              TAKE A CLASS <Chevron />
            </span>
            <ul className="dropdown-menu">
              <li>From Home</li>
              <li>Digital Schedule</li>
              <li>Live at HQ</li>
              <li>Find a JAM Class</li>
            </ul>
          </li>
          <li>TEACH A CLASS</li>
          <li>VIRGIN VOYAGE RETREAT 2025</li>
          <li>EXPLORE</li>
          <li>COMMUNITY</li>
          <li className="dropdown">
            <span className="dropdown-toggle">
              SHOP <Chevron />
            </span>
            <ul className="dropdown-menu">
              <li>Apparel</li>
              <li>Digital Workouts</li>
            </ul>
          </li>
        </ul>

        <div className="nav-buttons">
          <button className="sign-in">SIGN IN</button>
          <button className="trial">START YOUR ONLINE TRIAL</button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            <li>NEW TO THE STUDIO</li>
            <li>TAKE A CLASS</li>
            <li>TEACH A CLASS</li>
            <li>VIRGIN VOYAGE RETREAT 2025</li>
            <li>EXPLORE</li>
            <li>COMMUNITY</li>
            <li>SHOP</li>
          </ul>
          <div className="nav-buttons-mobile">
            <button className="sign-in">SIGN IN</button>
            <button className="trial">START YOUR ONLINE TRIAL</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
