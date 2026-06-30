import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "#FFF",
        position: "sticky",
        top: "0",
        zIndex: 100,
      }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="btn border-0 bg-transparent"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </li>
          </ul>
        </div>

        {menuOpen && (
          <div className="mega-menu" ref={menuRef}>
            <div className="top-section">
              <div>
                <a href="http://localhost:5174/login" className="nav-link">
                  <img
                    src="src/assets/logo.png"
                    alt=""
                    style={{ height: "30px", width: "45px" }}
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
