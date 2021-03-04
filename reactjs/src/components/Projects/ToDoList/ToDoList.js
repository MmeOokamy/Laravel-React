import React, {useState} from "react";
import NavBar from "../../Navigation";
import Copyright from "../../Copyright";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';


import css from "./ToDoList.module.css";
import ListView from "./components/ListView";
import FormView from "./components/FormView";


const ToDoList = () => {

  const listTache = [
    {
      id: 1,
      title: "Ecrire du JS",
      description: "HODOR hodor HODOR! Hodor. Hodor hodor. Hodor hodor. Hodor? Hodor! ",
    },
    {
      id: 2,
      title: "Comprendre le JS",
      description: "HODOR HODOR! Hodor. HODOR hodor, hodor. Hodor hodor HODOR! Hodor. Hodor hodor. Hodor hodor. Hodor? Hodor! ",
    },
    {
      id: 3,
      title: "Coupler la todoliste avec laravel",
      description: "HODOR HODOR hodor, hodor. Hodor hodor HODOR! Hodor. Hodor hodor. Hodor hodor. Hodor? Hodor!",
    },
  ];
  const [list, setList] = useState(listTache);




  return (<>
      <NavBar />
     <div className="container">
       
        <h1> Ma Super Liste  super moche</h1>
        <h3>En cour de réalisation</h3>
        <div className={css.fbox}>
          <div >
            {list.map((task)=> (
              <ListView task={task} />
            ))}
          </div>  
          
          <div className={css.form}>
          <FormView />
          </div>
        </div>
    
    </div>
    <Copyright />
  </>);
};

export default ToDoList;
