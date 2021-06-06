import React from "react";
import css from "./Projects.module.css";
import Navigation from "../Navigation";
import Copyright from "../Copyright";

const Projects = () => {
  return (
    <>
    <div className={css.body}>
      <Navigation />
      <div className={css.container}>
        <h1>Mes projets de développement personnels:</h1>
        <h2>l'intégration de tous les travaux effectuer est plus difficile que prévus, je mélange le php - symfony - laravel - react Js - ionic angular - bref un bon goulbigoulba </h2>
        <div>
          <p>
              <a className={css.navA} href="/project/NormandyAirlines/readme">NormandyAirLines</a> est le plus recent project developper en formation. 
              A la base c'est le resultat developpement sur 4 jours pour une app de reservation de billet d'avion apres un cour rapide sur 4jrs.
          </p>
        </div>
      
        
      </div>
      <Copyright />
      </div>
    </>
  );
};

export default Projects;
