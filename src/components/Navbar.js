import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#aboutMe">
              About Me
            </a>
            <a className="nav-link" href="#projects">
              My Projects
            </a>
            <a className="nav-link" href="#timeline">
              Education & Experience
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
