import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 
              data-aos="fade-right"
            className="fontAbril title-skills text-center">
              So, now I summarize my skills
            </h2>
          </div>
        </div>

        <div className="row container-skills-cards">
          <div 
              data-aos="zoom-in"
          
          className="col-lg-4 card-servicios">
            <div className=" member">
              <div className="info-estadisticas">
                <h2>
                  <i class="bi bi-code-slash"></i>
                </h2>
                <div className="h3-container">
                  <h3>Frontend</h3>
                </div>

                <div className="mb-3">
                <div className="container-skill">
                  <p className="name-skill mr-2">HTML5</p>
                </div>
                <div className="container-skill">
                  <p className="name-skill">CSS3</p>
                </div>
                <div className="container-skill">
                  <p className="name-skill">JavaScript</p>
                </div>
                </div>

                <div className="">
                <div className="container-skill">
                  <p className="name-skill">ReactJS</p>
                </div>
                <div className="container-skill">
                  <p className="name-skill">Bootstrap</p>
                </div>
                </div>

              </div>
            </div>
          </div>

          <div
              data-aos="zoom-in"
          
          className="col-lg-4 mt-4 mt-lg-0 card-servicios">
            <div className=" member">
              <div className="info-estadisticas">
                <h2>
                  <i class="bi bi-database"></i>
                </h2>
                <div className="h3-container">
                  <h3>Backend</h3>

                  
                </div>

                <div className="mb-3">
                <div className="container-skill">
                  <p className="name-skill mr-2">NodeJS</p>
                </div>
                <div className="container-skill">
                  <p className="name-skill">Express</p>
                </div>
                <div className="container-skill">
                  <p className="name-skill">MySQL</p>
                </div>
                </div>

                <div className="">
                <div className="container-skill">
                  <p className="name-skill">Firebase</p>
                </div>
                
                </div>

              </div>
            </div>
          </div>

          <div 
              data-aos="zoom-in"
          
          className="col-lg-4 mt-4 mt-lg-0 card-servicios">
            <div className=" member">
              <div className="info-estadisticas">
                <h2>
                  <i class="bi bi-gear-fill"></i>
                </h2>
                <div className="h3-container">
                  <h3>Tools</h3>
                </div>

                <div className="mb-3">
                <div className="container-skill">
                  <p className="name-skill mr-2">VS code</p>
                </div>
                <div className="container-skill">
                  <p className="name-skill">Git/GitHub</p>
                </div>
                <div className="container-skill">
                  <p className="name-skill">Scrum</p>
                </div>
                </div>

                

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
