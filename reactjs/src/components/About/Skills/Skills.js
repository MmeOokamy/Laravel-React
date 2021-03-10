import React from "react";
import {CircleProgress} from '../../ProgressBar/GradientCircle';


const Skills = () => {
  return (<>
     <section className="resume-section p-3 mb-3 p-lg-3 d-flex align-items-center" id="skills">
            <div className="w-sm-100 row">
              <h2 className="mb-5 col-12">Compétences</h2>
              <p className="mb-5 col-12">Les ProgressBar representent plus mon affinité que mes connaissances car le monde de la programmation evolue plus vite que la capacité humaine a tout apprendre!</p>
              
              <div className="col-md-4 mb-5">
                <div className="subheading mb-3 text-center">Langages</div>
                <div className="row">
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="HTML 5">
                    <CircleProgress icon={<i className="fab fa-html5"></i>} percentage={80} strokeWidth={5} width={100} primaryColor={["#11FFBD", "#AAFFB9"]}/>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="CSS 3">
                  <CircleProgress icon={<i className="fab fa-css3-alt"></i>} percentage={45} strokeWidth={5} width={100} primaryColor={["#11FFBD", "#AAFFB9"]}/>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="Bootstrap">
                  <CircleProgress icon={<i className="fab fa-bootstrap"></i>} percentage={55} strokeWidth={5} width={100} primaryColor={["#11FFBD", "#AAFFB9"]}/>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="Javascript & jQuery">
                  <CircleProgress icon={<i className="fab fa-js-square"></i>} percentage={35} strokeWidth={5} width={100} primaryColor={["#11FFBD", "#AAFFB9"]}/> 
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="PHP 7">
                  <CircleProgress icon={<i className="fab fa-php"></i>} percentage={55} strokeWidth={5} width={100} primaryColor={["#11FFBD", "#AAFFB9"]}/> 
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="MySQL & MariaDB">
                  <CircleProgress icon={<i className="fas fa-database"></i>} percentage={55} strokeWidth={5} width={100} primaryColor={["#11FFBD", "#AAFFB9"]}/>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="Java & J2EE">
                  <CircleProgress icon={<i className="fab fa-java"></i>} percentage={30} strokeWidth={5} width={100} primaryColor={["#11FFBD", "#AAFFB9"]}/>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5 ">
                <div className="subheading mb-3 text-center">Frameworks & CMS</div>
                <div className="row">
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="Symfony">
                  <CircleProgress icon={<i className="fab fa-symfony"></i>} percentage={40} strokeWidth={5} width={100} primaryColor={["#FF6400", "#FFFF00"]}/>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="React">
                  <CircleProgress icon={<i className="fab fa-react"></i>} percentage={30} strokeWidth={5} width={100} primaryColor={["#FF6400", "#FFFF00"]}/>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="laravel">
                  <CircleProgress icon={<i className="fab fa-laravel"></i>} percentage={20} strokeWidth={5} width={100} primaryColor={["#FF6400", "#FFFF00"]}/>
                  </div>
                  <div class="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="angular">
                  <CircleProgress icon={<i class="fab fa-angular"></i>} percentage={10} strokeWidth={5} width={100} primaryColor={["#FF6400", "#FFFF00"]}/>
                  </div>
                  <div class="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="ionic">
                  <CircleProgress icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4327 9.05578L30.5633 9.36054C31.5211 11.4721 32 13.6925 32 16C32 24.8163 24.8163 32 16 32C7.18367 32 0 24.8163 0 16C0 7.18367 7.18367 0 16 0C18.5905 0 21.0503 0.609524 23.3143 1.7415L23.619 1.89388L23.3578 2.11156C22.7048 2.63401 22.2041 3.28707 21.8776 4.04898L21.7905 4.26667L21.5946 4.17959C19.8313 3.35238 17.9592 2.91701 16 2.91701C8.77279 2.91701 2.91701 8.77279 2.91701 16C2.91701 23.2272 8.77279 29.083 16 29.083C23.2272 29.083 29.083 23.2054 29.083 16C29.083 14.2803 28.7565 12.5823 28.0816 10.9932L27.9946 10.7755L28.2122 10.6884C28.9741 10.4054 29.6707 9.92653 30.215 9.31701L30.4327 9.05578ZM26.4707 9.36057C28.3102 9.36057 29.8014 7.8694 29.8014 6.02996C29.8014 4.19051 28.3102 2.69934 26.4707 2.69934C24.6313 2.69934 23.1401 4.19051 23.1401 6.02996C23.1401 7.8694 24.6313 9.36057 26.4707 9.36057ZM15.9999 8.70754C11.9727 8.70754 8.7074 11.9728 8.7074 16.0001C8.7074 20.0273 11.9727 23.2926 15.9999 23.2926C20.0271 23.2926 23.2924 20.0273 23.2924 16.0001C23.2924 11.9728 20.0271 8.70754 15.9999 8.70754Z" fill="currentColor"></path>
                      </svg>} percentage={10} strokeWidth={5} width={100} primaryColor={["#FF6400", "#FFFF00"]}/>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5 ">
                <div className="subheading mb-3 text-center">Tools</div>
                <div className="row">
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="GitKraken">
                    <CircleProgress icon={<i className="fab fa-gitkraken"></i>} percentage={10} strokeWidth={5} width={100} primaryColor={["#004693", "#00FFE9"]}/>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="Github">
                    <CircleProgress icon={<i className="fab fa-github"></i>} percentage={10} strokeWidth={5} width={100} primaryColor={["#004693", "#00FFE9"]}/>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="NPM">
                   <CircleProgress icon={<i className="fab fa-npm"></i>} percentage={10} strokeWidth={5} width={100} primaryColor={["#004693", "#00FFE9"]}/>
                  </div>
                  <div className="col-4 text-center h1" data-toggle="tooltip" data-placement="top" title="swift & xCode">
                    <CircleProgress icon={<i class="fab fa-apple"></i>} percentage={30} strokeWidth={5} width={100} primaryColor={["#004693", "#00FFE9"]}/>
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
