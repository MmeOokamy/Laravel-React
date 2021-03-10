import React, {useState, useEffect} from "react";
import NavBar from "../../Navigation";
import Copyright from "../../Copyright";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

import css from "./ToDoList.module.css";
import Task from "./components/Task/Task";
import FormAddTask from "./components/FormAddTask/FormAddTask";

import {objToArr} from "../../../Api/utils";

const ToDoList = () => {

  // const listTache = [
  //   {
  //     id: 1,
  //     title: "Ecrire du JS",
  //     content: "HODOR hodor HODOR! Hodor. Hodor hodor. Hodor hodor. Hodor? Hodor! ",
  //   },
  //   {
  //     id: 2,
  //     title: "Comprendre le JS",
  //     content: "HODOR HODOR! Hodor. HODOR hodor, hodor. Hodor hodor HODOR! Hodor. Hodor hodor. Hodor hodor. Hodor? Hodor! ",
  //   },
  //   {
  //     id: 3,
  //     title: "Coupler la todoliste avec laravel",
  //     content: "HODOR HODOR hodor, hodor. Hodor hodor HODOR! Hodor. Hodor hodor. Hodor hodor. Hodor? Hodor!",
  //   },
  // ];

 const [list, setList] = useState([]);
// Je dois trouver le moyen d'envoyer les info de la bdd 
// http://127.0.0.1:8000/api/todolist

useEffect(() => {
  async function fetchData() {
      try {
          const res = await fetch(`http://127.0.0.1:8000/api/todolist`);
          if(!res.ok) throw Error(res.statusText);
          else{
              const data = await res.json();
              console.log(data);
              setList([...objToArr(data)]);
            }
      } catch (e) {
          console.log(e);
      }
  };
  fetchData();
}, [list]);



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
