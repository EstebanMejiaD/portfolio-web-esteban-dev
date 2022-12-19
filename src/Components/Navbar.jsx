import React from "react";



const Navbar = () => {
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand text-white fs-3 name-bank fontAbril" href="/">
           EstebDev.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="bi bi-list hamIcon"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-lg-8 py-3">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Skill
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#negocios">
                  Works
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#comunidad">
                  Contact
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
