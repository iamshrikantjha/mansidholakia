import React from "react";
import Home from "./Home";
import BulletList from "../components/BulletList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Bullet from "../components/Bullet";
import Categories from "./Categories";
import BlogsList from "./BlogsList";
import history from './history';
import ScrollToTop from "../utility/ScrollToTop";

const RouterX = () => {
  return (
    <>
      {/* <Router> */}
      <Router basename={window.location.pathname || ''}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <ScrollToTop />
        <Switch>
          <Route path="/blog">
            <Bullet />
          </Route>
          <Route path="/category">
            <Categories />
          </Route>
          <Route path="/blogs">
            {/* <BulletList /> */}
            <BlogsList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default RouterX;

{
  /* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */
}
