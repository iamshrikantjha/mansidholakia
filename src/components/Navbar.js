import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setisActive] = React.useState(false);

  return (
    <>
      {/* <nav className="navbar px-5" role="navigation" aria-label="main navigation"> */}
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
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
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
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
            {/* <a className="navbar-item hero-nav-button lato">About</a>
            <a className="navbar-item hero-nav-button lato">Experience</a>
            <a className="navbar-item hero-nav-button lato">Plans</a>
            <a className="navbar-item hero-nav-button lato">Blog</a>
            <a className="navbar-item hero-nav-button lato">Contact</a> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
