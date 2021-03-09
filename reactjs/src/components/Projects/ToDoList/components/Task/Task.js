import React from "react";
import css from "./Task.module.css";

const Task = ({task}) => {
  return (<>
    <label className={css.task}>
      <input className={css.checkbox} type="checkbox" name="statue" />
      <div className={css.title}>{task.title}</div>
      <p className={css.description}>{task.description}</p>
      <div className={css.btn}>
        <button className={css.btnTask}><i class="far fa-trash-alt"></i></button>
        <button className={css.btnUpdate}><i class="far fa-edit"></i></button>
      </div>
    </label>
  </>);
};

export default Task;
