import React from "react";
import css from "./Me.module.css";

const Me = () => {
  return (<>
    <section className="resume-section p-3 mb-3 p-lg-3 d-flex" id="about">
            <div className="w-sm-100">
                <h1 className="mt-4 mb-1 massEffect">Mme
                    <span className={css.massEffect}>Ookamy</span>
                </h1>
                <h2 className="mb-0">Développeuse Junior</h2>
                <div className="subheading mb-5">
                    <a className={css.url} href="mailto:manue.ggt@gmail.com">manue.ggt@gmail.com</a>
                </div>
                <p className="lead mb-1">Moi, c’est <strong>Manue</strong>. Mon métier : <strong>Développeuse</strong>.
                </p>
                <p className="lead mb-1">Plongé dans les ordinateurs depuis l'enfance, je fais de ma passion mon métier!</p>
            
                <p className="mb-0">Ancienne <strong>Ambulancière</strong>. J'ai vecu 10ans dans mon ambulance. 
                    Parcourir des millions de kilometres de route, rencontrer et aider des milliers de personnes.</p>
                <p className="mb-4">Et depuis 2020, je me suis lancée dans cet nouvelle aventure <strong>devenir Développeuse</strong>. J'ai quitté mon metier,
                    ma région et je me suis donnée les moyens de me former et d'apprendre.</p>
                
                <div className="social-icons text-center text-sm-left">
                    <div className={css.containerUrl}>
                    <a className={css.url} href="https://www.linkedin.com/in/e-gougelet/" title="Profil LinkedIn" target='_blank' rel="noreferrer">
                            <i class="fab fa-linkedin-in"></i>
                            </a>
                    <a className={css.url} href="https://github.com/MmeOokamy" title="Github" target='_blank' rel="noreferrer">
                            <i className="fab fa-github"></i>
                            </a>
                    </div>
                </div>
            </div>
        </section>
  </>);
};

export default Me;
