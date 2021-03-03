import React from "react";
import css from "./ListView.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';


const ListView = ({task}) => {
  return (<>
        <div className={css.bodyTask}>
          <div className={css.info}>
            <h5>{task.id} - {task.title}</h5>
            <hr />
            <p>{task.description}</p>
          </div>
          <hr />
          <div className={css.btn}>
            <button className="button is-success"><FontAwesomeIcon icon={faCheck}/></button>
            <button className="button is-warning"><FontAwesomeIcon icon={faCheck}/></button>
            <button className="button is-danger"><FontAwesomeIcon icon={faTrash}/></button>
          </div>
        </div>
  </>);
};

export default ListView;
