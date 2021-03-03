import React from "react";
import css from "./NormandyAirLines.module.css";
import { Container } from 'react-bootstrap';
import NavBar from "../../Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';




const NormandyAirLines = () => {
  return (<>
    <NavBar />
    <Container className={css.body}>
      <h1>Normandy Airlines: Reservation de billet d'avion en ReactJS</h1>
      <h2>Objectif:</h2>
      <p>Développer une application en reactJS pour ensuite l'adapter en ReactNative pour le mobile. Le développement fut pensé pour un portage sur smartphone.</p>
      
      <h4>Fonctionnalités:</h4>
      <ul>
        <li><FontAwesomeIcon icon={faArrowRight}/> Rechercher un vol</li>
        <li><FontAwesomeIcon icon={faArrowRight}/> Effectuer une reservation</li>
        <li><FontAwesomeIcon icon={faArrowRight}/> Annuler une reservation</li>
        <li><FontAwesomeIcon icon={faArrowRight}/> Avoir un profil client</li>
      </ul>
      <hr classNAme="my-5"/>
      <div >
        <div className={css.orange}>
          <a className={css.a} href="/project/NormandyAirlines/recherche">
            <FontAwesomeIcon icon={faSignInAlt}/> vers le projet
          </a>
        </div>
        
        <div className={css.orange}>
          <a className={css.a} href="https://github.com/MmeOokamy/AirMobile-ReactJs" target="_blank" rel="noreferrer">
            <i className="fab fa-gitkraken"></i> Le code source du projet (independant)
          </a>
        </div>
      </div>
    </Container>
  
  </>);
};

export default NormandyAirLines;
