import React from "react";
import "../styles/Navbar.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";

import { useState } from "preact/hooks";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img src={logo} alt="car-logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/vehicle">
              Vehicle Models
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/team">
              Our Team
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-buttons">
        <ul>
          <li>
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          </li>
        </ul>
        <button className="nav-buttons-register">Register</button>
      </div>

      <div className="nav-hamburger" onClick={() => setHamburger(!hamburger)}>
        {hamburger ? (
          <GiHamburgerMenu />
        ) : (
          <>
            <div className="nav-sidebar">
              <ul>
                <GiCrossMark id="nav-sidebar-cross" />
                <div
                  className="nav-hamburger"
                  onClick={() => setHamburger(!hamburger)}
                >
                  {/* <div onClick={() => setHamburger(!hamburger)}>{}</div>{" "} */}
                </div>
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/vehicle">
                    Vehicle Models
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" to="/testimonials">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/team">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                </li>
                <button className="nav-buttons-register">Register</button>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
