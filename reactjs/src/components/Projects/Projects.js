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
       
        
      </div>
      <Copyright />
      </div>
    </>
  );
};

export default Projects;
