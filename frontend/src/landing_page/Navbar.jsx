import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom bg-white sticky-top"
      style={{ zIndex: 100 }}
    >
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "140px" }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          <i className="fa-solid fa-bars fs-4"></i>
        </button>

        {/* Navigation */}
        <div
          className={`collapse navbar-collapse ${
            navOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/signup"
                onClick={() => setNavOpen(false)}
              >
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={() => setNavOpen(false)}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/product"
                onClick={() => setNavOpen(false)}
              >
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/pricing"
                onClick={() => setNavOpen(false)}
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/support"
                onClick={() => setNavOpen(false)}
              >
                Support
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="btn border-0 bg-transparent"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <i className="fa-solid fa-bars fs-5"></i>
              </button>
            </li>

          </ul>
        </div>

        {/* Mega Menu */}
        {menuOpen && (
          <div className="mega-menu" ref={menuRef}>
            <div className="top-section">

              <div>
                <a
                  href="https://zerotrade-dashboard.netlify.app/login"
                  className="nav-link"
                >
                  <img
                    src={logo}
                    alt="logo"
                    className="img-fluid mb-2"
                    style={{ width: "45px" }}
                  />
                  <h5>ZeroTrade</h5>
                  <p>Trading platform</p>
                </a>
              </div>

              <div>
                <h5>Console</h5>
                <p>Backoffice</p>
              </div>

              <div>
                <h5>Kite Connect</h5>
                <p>Trading APIs</p>
              </div>

              <div>
                <h5>Coin</h5>
                <p>Mutual funds</p>
              </div>

            </div>

            <div className="bottom-section">

              <div>
                <h5>Utilities</h5>
                <p>Calculators</p>
                <p>Brokerage calculator</p>
                <p>Margin calculator</p>
                <p>SIP calculator</p>
              </div>

              <div>
                <h5>Updates</h5>
                <p>Z-Connect blog</p>
                <p>Circulars / Bulletin</p>
                <p>IPOs</p>
                <p>Markets</p>
              </div>

              <div>
                <h5>Education</h5>
                <p>Varsity</p>
                <p>Trading Q&A</p>
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;