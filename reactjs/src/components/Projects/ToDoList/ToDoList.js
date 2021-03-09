import React, {useState, useContext} from "react";
import NavBar from "../../Navigation";
import Copyright from "../../Copyright";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

import css from "./ToDoList.module.css";
import Task from "./components/Task/Task";
import FormAddTask from "./components/FormAddTask/FormAddTask";



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
       <div>
         <FormAddTask />
       </div>
       <hr/>
      <div>{list.map((t)=>(
        <Task task={t} />
      ))}</div>
   
    </div>
    
  </>);
};

export default ToDoList;
