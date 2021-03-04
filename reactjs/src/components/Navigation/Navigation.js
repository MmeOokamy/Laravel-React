import React from "react";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (<>
      <div className={css.navigation}>
        <nav className={css.navbar}>
          <div className={css.navME}><a className={css.navA} href="/">MmeOokamy</a></div>
          <div className={css.navItems}>
            <div><a className={css.navA} href="/about"> A Propos</a></div>
            <div className={css.navDropdown}>
              <span>Projets</span>
              <div className={css.navDropdowncontent}>
                <div>
                  <a className={css.navA} href="/project/ToDoList">ToDoList</a>
                </div>
                <div>
                  <a className={css.navA} href="/project/NormandyAirlines/readme">NormandyAirLines</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

  </>);
};

export default Navigation;
