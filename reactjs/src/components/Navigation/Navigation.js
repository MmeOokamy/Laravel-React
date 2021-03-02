import React from "react";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (<>
  <div className={css.navigation}>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
              <a className="navbar-item" href="/">Home</a>
              <a className="navbar-item" href="/about"> A Propos</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/projects">Projects</a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="/project/ToDoListJS">ToDoList-JS</a>
              <a className="navbar-item" href="/project/NormandyAirlines">NormandyAirLines</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>

  </>);
};

export default Navigation;
