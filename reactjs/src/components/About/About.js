import React from "react";
import css from "./About.module.css";
import Navigation from "../Navigation";
import Copyright from "../Copyright";
import Me from "./Me";
import Skills from "./Skills";
import Xp from "./Xp";
import {Tab, Tabs } from 'react-bootstrap';

const About = () => {
  
  return (<>
    <div className={css.body}>
      <Navigation />

      <div className="container">
        <Tabs defaultActiveKey="A propos" transition={false} id="tab">

          <Tab eventKey="A propos" title="A propos" className={css.tabHeight} >
            <Me />
          </Tab>

          <Tab eventKey="skills" title="Mes Skills" className={css.tabHeight} >
            <Skills />
          </Tab>
          <Tab eventKey="xp" title="Mes Expériences" className={css.tabHeight} >
            <Xp />
          </Tab>  

        </Tabs>
      </div>      
      <Copyright />
    </div>
  </>);
};

export default About;
