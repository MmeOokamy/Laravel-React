import React from "react";
import PercenteProgress from "../../ProgressBar/PercentBar";
import css from "./ProgressBarVisual.module.css";
import {CircleProgress} from '../../ProgressBar/GradientCircle';

const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 40 },
  ];

const ProgressBarVisual = () => {

  
  return (<>
  <h1>Les différentes Barre de progressions</h1> 
  <hr />
  <div className={css.ProgressBar}>
    <h3>ProgressBar Pourcentage</h3>
      {testData.map((item, idx) => (
        <PercenteProgress key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </div>

    <hr />
  <div className={css.ProgressBar}>
    <h3> Gradient Progress </h3>
    <div className={css.CircleProgress}>
    <CircleProgress icon={<i className="fab fa-symfony"></i>} fontSize={40} percentage={50} strokeWidth={5} width={80}/>
    <CircleProgress icon={<i className="fab fa-react"></i>} percentage={15} strokeWidth={5} width={50} primaryColor={["#11FFBD", "#AAFFB9"]}/>
    <CircleProgress icon={<i className="fab fa-laravel"></i>} percentage={15} strokeWidth={5} width={100} primaryColor={["#11FFBD", "#AAFFB9"]}/>
    </div>
    </div>

    <hr />
  <div className={css.ProgressBar}>
    <h3>Step Progress </h3>
    <div className={css.StepProgress}>
        
    </div>
    </div>

</>)};

export default ProgressBarVisual;
