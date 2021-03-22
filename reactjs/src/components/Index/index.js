import React from "react";
import css from "./Index.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughWink, faCode } from '@fortawesome/free-solid-svg-icons';


const Index = () => {
 
 
  return (
    < > 
        <div className={css.body}>
          <div className={css.container}>
           <h1 className={css.massEffect}>Emmanuelle <span className={css.txt}>GOUGELET</span></h1>
           <h2 className={css.h2}> <FontAwesomeIcon icon={faCode} />Développeuse Web Junior</h2>
              <div>
                <a className="btn aqua-gradient waves-effect" href="/aboutme"> Un petit bout de moi <FontAwesomeIcon  icon={faLaughWink}/> </a>
              </div>
          </div>
        </div>
      </>
  );
};

export default Index;
