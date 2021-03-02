import React from 'react';
import Index from "../Index";
import About from "../About";
import Projects from "../Projects";
import NormandyAirlines from "../Projects/NormandyAirLines";
import ToDoListJS from "../Projects/ToDoListJS";
import css from "./App.module.css";
import {Route, BrowserRouter as Router} from "react-router-dom";

const App = ()=> {

   return (<>
   
      <Router>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/projects/NormandyAirlines" component={NormandyAirlines}/>
          <Route path="/projects/ToDoListJS" component={ToDoListJS}/>
      </Router>
   
   </>
  );
}


export default App;
