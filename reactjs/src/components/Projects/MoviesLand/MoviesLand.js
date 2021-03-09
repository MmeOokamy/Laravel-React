import React from "react";
import Navigation from "../../Navigation";
import Copyright from "../../Copyright";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import css from "./MoviesLand.module.css"
import {Tab, Tabs } from 'react-bootstrap';

import MoviesList from "./pages/VideoTekPage";
import AddMovies from "./pages/AddPage";


const MoviesLand = () => {

  return (<>
    <div className={css.body}>
      <Navigation />

      <div className="container">
        <Tabs defaultActiveKey="A propos" transition={false} id="tab">

          <Tab eventKey="mesfilms" title="Mes Films" className={css.tabHeight} >
            <MoviesList />
          </Tab>

          <Tab eventKey="theme" title="Catégories" className={css.tabHeight} >
            
          </Tab>
          <Tab eventKey="searchMovies" title="Recherche de Film" className={css.tabHeight} >
           
          </Tab>
          <Tab eventKey="addMovies" title="Ajouter..." className={css.tabHeight} >
           <AddMovies />
          </Tab>  

        </Tabs>
      </div>      
    </div>
  </>);
};

export default MoviesLand;
