import React from "react";
import css from "./Me.module.css";
import Navigation from "../../Navigation";

const Me = () => {
  return (<>
    <Navigation />
    <section className="container resume-section p-3 mb-3 p-lg-3 d-flex" id="about">
            <div className="w-sm-100">
                <h1 className="mt-4 mb-1 massEffect">Mme
                    <span className={css.massEffect}>Ookamy</span>
                </h1>
                <h2 className="mb-0">Développeuse Junior</h2>
                <div className="subheading mb-5">
                    <a className={css.url} href="mailto:manue.ggt@gmail.com">manue.ggt@gmail.com</a>
                </div>
                
                <p className="lead mb-1">Hey Bonjour à tous! Moi, c’est <strong>Manue</strong>. Mon métier : <strong>Développeuse</strong>.</p>
        <p className="lead mb-1">Mi-2019, je voulais changer de vie professionnelle, après un parcours tumultueux j’ai plongé avec engouement dans le monde du développement web.</p>
        <p className="mb-0">Aujourd’hui... Je suis <strong>développeuse junior full stack!</strong> Je me sens capable de dév en PHP, javaScript, swift et Java. J’ai déjà développé une application iOS et ionic-Angular pour android. Étant junior j’apprend encore et toujours! le propre du développeur.</p>
        <p className="mb-4">Pourtant j’ai envie de me lancer dans un autre langage.
          <i class="fab fa-python"></i><strong> PYTHON </strong><i class="fab fa-python"></i> 
          Comment faire? Dans mon coin ? en alternance? en centre de formation?
          J’ai plus de 30 ans. Je n’ai pas envie de faire une formation, exclusivement "théorique". Le faire seule? Serais-je capable de suivre strictement mon planning? En alternance? Je me dis que c’est une des meilleures solutions!</p>
          
          <p className="mb-4">Être immergé dans le développement et me concentrer sur le langage python. Apprendre la théorie en formation et en même temps pratiquer dans un cadre professionnel. Au bout du parcours, obtenir un diplôme officiel.
          
          Mes connaissances de Python? Un grain de sable de savoir, je me suis amusée sur quelques tuto: todo list et un petit snake.
          C’est le début d’une grande aventure!</p>
          
          <p className="mb-4">Le plus dur va être de trouver une entreprise qui souhaite transmettre son savoir et encadrer une jeune développeuse.
          
          Vous qui lisez mon profil, si vous êtes arrivé jusqu'à ces quelques lignes ainsi j’ai pu attiser votre curiosité. Si vous êtes le porte étendard d’une entreprise à la recherche d’un alternant python je serais ravie d'échanger avec vous. D’ailleurs je suis à l'écoute de toutes les opportunités me permettant d'évoluer professionnellement.</p>
                
                <div className="social-icons text-center text-sm-left">
                    <div className={css.containerUrl}>
                    <a className={css.url} href="https://www.linkedin.com/in/e-gougelet/" title="Profil LinkedIn" target='_blank' rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
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
