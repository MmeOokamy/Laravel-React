import React from 'react';
import Index from "../Index";
import About from "../About";
import Projects from "../Projects";
import NAL from "../Projects/NormandyAirLines";
import NAL_SearchPage from "../Projects/NormandyAirLines/pages/SearchPage";
import NAL_ResultPage from "../Projects/NormandyAirLines/pages/ResultPage";
import NAL_ReservationPage from "../Projects/NormandyAirLines/pages/ReservationPage";
import NAL_ProfilePage from "../Projects/NormandyAirLines/pages/ProfilePage";
import NAL_ConfirmationPage from "../Projects/NormandyAirLines/pages/PopPage";
import ToDoList from "../Projects/ToDoList";
import ML_Main from "../Projects/MoviesLand";
import css from "./App.module.css";
import {Route, BrowserRouter as Router} from "react-router-dom";

const App = ()=> {

   return (<>
    <div className={css.body}>
      <Router>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          {/* Route du projet NormandyAirLines en ReactJS */}
          <Route path="/project/NormandyAirlines/readme" component={NAL}/>
          <Route path="/project/NormandyAirlines/recherche" component={NAL_SearchPage}/>
          <Route path="/project/NormandyAirlines/result" component={NAL_ResultPage}/>
          <Route path="/project/NormandyAirlines/reservation" component={NAL_ReservationPage}/>
          <Route path="/project/NormandyAirlines/profile" component={NAL_ProfilePage}/>
          <Route path="/project/NormandyAirlines/confirmation" component={NAL_ConfirmationPage}/>
          {/* Route de la ToDoList */}
          <Route path="/project/ToDoList" component={ToDoList}/>
           {/* Route de la MoviesLand */}
          <Route path="/project/MoviesLand/tab" component={ML_Main}/>
      </Router>
   
   </div>
   </>
  );
}


export default App;
