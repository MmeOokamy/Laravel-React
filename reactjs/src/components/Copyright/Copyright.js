import React from "react";
import css from "./Copyright.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Copyright = () => {

  const date = new Date();
  
  return (
    <>
        <div className={css.container}>         
          
          <div>
              <h5>Ookamy ©Copyright {date.getFullYear()}</h5>
              <FontAwesomeIcon  icon={faCode}/>
              <h4><a href="https://www.deviantart.com/yurelei" title="DeviantArt de Yurelei">Illustrations by Yurelei </a> </h4>
          </div>
          <div>
            <i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-php"></i> <i class="fab fa-bootstrap"></i> <i class="fab fa-mdb"></i> <i class="fab fa-symfony"></i> <i class="fab fa-github"></i>
          </div>
        </div> 
    </>
  );
};

export default Copyright;
