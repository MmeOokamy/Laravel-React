import React from "react";

const Skills = () => {
  return (<>
     <section className="resume-section p-3 mb-3 p-lg-3 d-flex align-items-center" id="skills">
            <div className="w-sm-100 row">
              <h2 className="mb-5 col-12">Compétences</h2>
             
              <div className="col-md-4 mb-5">
                <div className="subheading mb-3 text-center">Langages</div>
                <div className="row">
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="HTML 5">
                    <i className="fab fa-html5"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="CSS 3">
                    <i className="fab fa-css3-alt"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="Bootstrap">
                    <i className="fab fa-bootstrap"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="Javascript & jQuery">
                    <i className="fab fa-js-square"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="PHP 7">
                    <i className="fab fa-php"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="MySQL & MariaDB">
                    <i className="fas fa-database"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="Java & J2EE">
                      <i className="fab fa-java"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5 ">
                <div className="subheading mb-3 text-center">Frameworks & CMS</div>
                <div className="row">
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="Symfony">
                  <i className="fab fa-symfony"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="React">
                    <i className="fab fa-react"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="laravel">
                    <i className="fab fa-laravel"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5 ">
                <div className="subheading mb-3 text-center">Tools</div>
                <div className="row">
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="GitKraken">
                    <i className="fab fa-gitkraken"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="Github">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="NPM">
                    <i className="fab fa-npm"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="Jira">
                      <i className="fab fa-jira"></i>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="swift & xCode">
                      <i className="fab fa-swift"></i>
                  </div>
      
                </div>
              </div>
              <ul className="fa-ul mb-5">
                  <li>
                      <i className="fa-li fas fa-terminal"></i>
                      Visual Code - Eclipse - PhpStorm - xCode</li>
                  <li>
                  <i className="fa-li fas fa-laptop-code"></i>
                  Windows - Linux - <i className="fas fa-user-secret"></i>ackintosh</li>
                <li>
                  <i className="fa-li fas fa-bug"></i>
                  Parler a mon code ne fait pas de moi une femme étrange!</li>
                <li>
                  <i className="fa-li fas fa-users"></i>
                  Le travail d'équipe est important</li>
                <li>
                  <i className="fa-li fas fa-search"></i>
                  Capable de chercher l'information!</li>
              </ul>

            </div>
          </section>
  </>);
};

export default Skills;
