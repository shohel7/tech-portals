import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand fw-bold fs-2" href="#">
            Tech<span className="text-danger">-</span>Portals
          </a>
          <button
            className="navbar-toggler text-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-0 column-gap-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Discover
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  For Job Seekers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  For Companies
                </a>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <button type="button" className="btn login-btn">
                  Log In
                </button>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <button type="button" className="btn signup-btn">
                  Sign Up
                </button>
              </li>
            </ul>
            <div className="d-flex">
              {/* <button type="button" className="btn btn-outline-primary">
                Primary
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
