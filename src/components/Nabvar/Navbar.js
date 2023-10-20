import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark mb-4">
      <div className="container">
        <Link to="/" className="text-white navbar-brand fs-3 ubuntu">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>
        <style jsx="true">{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-white"></span>
          <span className="fas fa-times close text-white"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className=" navbar-nav fs-5">
          <NavLink to="/" className="text-white nav-link">
              INICIO
            </NavLink>
            <NavLink to="/" className="text-white nav-link">
              Personajes
            </NavLink>
            <NavLink to="/episodes" className="text-white nav-link">
              Episodios
            </NavLink>
            <NavLink
              activeClassName="active"
              className="text-white nav-link"
              to="/location"
            >
              Ubicacion
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
