import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const BulletsNav = () => {
  const [isActive, setisActive] = React.useState(false);
  return (
    <div className="">
      <nav
        className="navbar is-transparent is-dark is-fixed-top nav-pad"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo-white.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => {
              setisActive(!isActive);
            }}
            
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`animate__animated animate__fadeInDown navbar-menu ${
            isActive ? "is-active" : ""
          }`}
        >
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <Link className="navbar-item hero-nav-button lato" to="/">
              Home
            </Link>
            <Link className="navbar-item hero-nav-button lato" to="/category">
              Categories
            </Link>
            <Link className="navbar-item hero-nav-button lato" to="/blogs">
              Blogs
            </Link>
            <Link className="navbar-item hero-nav-button lato" to="/blog">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BulletsNav;
