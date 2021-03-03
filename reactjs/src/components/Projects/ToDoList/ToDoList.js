import React, {useState} from "react";
import NavBar from "../../Navigation";
import Copyright from "../../Copyright";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';


import css from "./ToDoList.module.css";
import ListView from "./components/ListView";
import FormView from "./components/FormView";


const ToDoList = () => {

  const listTache = [
    {
      id: 1,
      title: "Ecrire du JS",
      description: "HODOR HODOR! Hodor, hodor. Hodor. Hodor! Hodor hodor. HODOR hodor, hodor. Hodor! Hodor hodor. HODOR HODOR! Hodor, hodor. Hodor. Hodor. HODOR hodor, hodor. Hodor hodor HODOR! Hodor. Hodor hodor. Hodor hodor. Hodor? Hodor! Hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor hodor",
    },
    {
      id: 2,
      title: "Comprendre le JS",
      description: "HODOR HODOR! Hodor, hodor. Hodor. Hodor! Hodor hodor. HODOR hodor, hodor. Hodor! Hodor hodor. HODOR HODOR! Hodor, hodor. Hodor. Hodor. HODOR hodor, hodor. Hodor hodor HODOR! Hodor. Hodor hodor. Hodor hodor. Hodor? Hodor! Hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor hodor",
    },
  ];
  const [list, setList] = useState(listTache);




  return (<>
      <NavBar />
     <div className="container">
       <div>
        <h1> Ma Super Liste </h1>
          <div >
            {list.map((task)=> (
              <ListView task={task} />
            ))}
          </div>  
        </div>
        
          <hr/>
        <div className={css.form}>
        <FormView />
        </div>
        
    </div>
    <Copyright />
  </>);
};

export default ToDoList;
