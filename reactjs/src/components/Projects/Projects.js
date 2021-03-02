import React from "react";
import css from "./Projects.module.css";
import Navigation from "../Navigation";
import Copyright from "../Copyright";
import NormandyAirLines from "./NormandyAirLines";
import ToDoListJS from "./ToDoListJS";

const Projects = () => {
  return (
    <>
    <div className={css.body}>
      <Navigation />
      <div className="container">
        <h1>Mes projets de développement codé avec différents langages, librairies, frameworks</h1>
        <div className="col-md-4 mb-5">
          <div className="subheading mb-3 text-center">Langages</div>
          <div className="row">
            <div
              className="col-4 text-center h1"
              data-toggle="tooltip"
              data-placement="top"
              title="HTML 5"
            >
              <i className="fab fa-html5"></i>
            </div>
            <div
              className="col-4 text-center h1"
              data-toggle="tooltip"
              data-placement="top"
              title="CSS 3"
            >
              <i className="fab fa-css3-alt"></i>
            </div>
            <div
              className="col-4 text-center h1"
              data-toggle="tooltip"
              data-placement="top"
              title="Bootstrap"
            >
              <i className="fab fa-bootstrap"></i>
            </div>
            <div
              className="col-4 text-center h1"
              data-toggle="tooltip"
              data-placement="top"
              title="Javascript & jQuery"
            >
              <i className="fab fa-js-square"></i>
            </div>
            <div
              className="col-4 text-center h1"
              data-toggle="tooltip"
              data-placement="top"
              title="PHP 7"
            >
              <i className="fab fa-php"></i>
            </div>
            <div
              className="col-4 text-center h1"
              data-toggle="tooltip"
              data-placement="top"
              title="MySQL & MariaDB"
            >
              <i className="fas fa-database"></i>
            </div>
            <div
              className="col-4 text-center h1"
              data-toggle="tooltip"
              data-placement="top"
              title="Java & J2EE"
            >
              <i className="fab fa-java"></i>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
      </div>
    </>
  );
};

export default Projects;
