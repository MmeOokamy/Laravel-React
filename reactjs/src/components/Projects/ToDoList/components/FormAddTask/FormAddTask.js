import React, { useState} from "react";
import css from "./FormAddTask.module.css";

const FormAddTask = () => {

  const initForm = {
    title: "",
    description: "",
  };
  const [form, setForm] = useState(initForm);

  const handleChange = (e) => {
    const value = e.target.value;
      const name = e.target.name;
      //setForm sert alors a modifier le formulaire
      setForm({...form, [name] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (<>
  <form onSubmit={handleSubmit} className={css.formBody}>
     <div className={css.formBox}>
       <label className={css.formLabel}>Titre : </label>
      <input className={css.formInput} type="text" name="title" value={form.title} />
    </div>

     <div className={css.formBox}>
      <label className={css.formLabel}>Description : </label>
      <input className={css.formInput} type="text" name="description" value={form.description} />
    </div>

    <div className={css.btn}>
        <button className={css.btnUpdate}><i class="far fa-edit"></i></button>
    </div>
    
  </form>
</>);
};

export default FormAddTask;
