import React, {useState} from "react";
import css from "./FormView.module.css";


const FormView = () => {

  const formBody={
    id: '',
    title: '',
    description: '',
  };

  const [form, setForm] = useState(formBody);

  const handleChange = (e) => {
    const value =  e.target.value;
      const name = e.target.name;
      setForm({...form, [name] : value });
      console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setForm(formBody);
  };

  return (<>
      <div className={css.bodyForm}>
        <form onSubmit={handleSubmit}>
          <div className={css.inputPack}>
            <div className={css.labelInpute}>
              <label className={css.labelFlex}>Nom de la Tâche : </label>
              <input className={css.inputFlex} type="text" name="title" onChange={handleChange} value={form.title} />
            </div>
            <div className={css.labelInpute}>
              <label className={css.labelFlex}>Description : </label>
              <textarea className={css.inputFlex} name="description" rows="5" cols="50" value={form.description} onChange={handleChange}> </textarea>
            </div>
          </div>
          
          <button className={css.btn}>Go</button>
        </form>
      </div>
  </>);
};

export default FormView;
