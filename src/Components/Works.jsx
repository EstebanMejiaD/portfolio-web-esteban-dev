import React from "react";
import "./Works.css";
const Works = () => {
  return (
    <section id="works" className="works">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2
              data-aos="zoom-in"
              className="fontAbril title-skills text-center"
            >
              My Works
            </h2>
          </div>
        </div>

        <div className="row container-project">
          <div data-aos="fade-down" className="col-md-4 info-project">
            <div className="container-title-project text-center mb-3">
              <h4 className="fontAbril">INOX BANK</h4>
            </div>
            <div className="container-info-project">
              <div className="row role-project">
                <div className="col-sm-4 key-project">
                  <p>Role:</p>
                </div>
                <div className="col-sm-8 value-project">Backend developer.</div>
              </div>
              <div className="row technologies-project mt-3">
                <div className="col-sm-4 key-project">
                  <p>technologies:</p>
                </div>
                <div className="col-sm-8 value-project">
                  NodeJS, Express, MySQL, HandleBars, Boostrap.
                </div>
              </div>

              <div className="container-links-project">
                <a
                  href="https://github.com/EstebanMejiaD/banca-movil-web-INOX"
                  className="link-project"
                >
                  To GitHub{" "}
                  <i class="bi bi-arrow-up-right icon-arraw-project"></i>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-8">
            <div className="container-imagen-project container-project-right">
              <img src="./images/INOXBANK.png" alt="INOX BANK" />
            </div>
          </div>
        </div>

        <div className="row container-project">
          <div data-aos="fade-up" className="col-md-8">
            <div className="container-imagen-project container-project-left">
              <img src="./images/INOXSTORE.png" alt="INOX STORE" />
            </div>
          </div>

          <div data-aos="fade-down" className="col-md-4 info-project">
            <div className="container-title-project text-center mb-3">
              <h4 className="fontAbril">INOX STORE</h4>
            </div>
            <div className="container-info-project">
              <div className="row role-project">
                <div className="col-sm-4 key-project">
                  <p>Role:</p>
                </div>
                <div className="col-sm-8 value-project">Backend developer.</div>
              </div>
              <div className="row technologies-project mt-3">
                <div className="col-sm-4 key-project">
                  <p>technologies:</p>
                </div>
                <div className="col-sm-8 value-project">
                  NodeJS, Express, MySQL, HandleBars, Boostrap.
                </div>
              </div>

              <div className="container-links-project">
                <a
                  href="https://github.com/EstebanMejiaD/Proyecto-E-Commerce"
                  className="link-project"
                >
                  To GitHub{" "}
                  <i class="bi bi-arrow-up-right icon-arraw-project"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row container-project">
          <div data-aos="fade-down" className="col-md-4 info-project">
            <div className="container-title-project text-center mb-3">
              <h4 className="fontAbril">EstebDev - Portfolio</h4>
            </div>
            <div className="container-info-project">
              <div className="row role-project">
                <div className="col-sm-4 key-project">
                  <p>Role:</p>
                </div>
                <div className="col-sm-8 value-project">Frontend.</div>
              </div>
              <div className="row technologies-project mt-3">
                <div className="col-sm-4 key-project">
                  <p>technologies:</p>
                </div>
                <div className="col-sm-8 value-project">
                  ReactJS, Boostrap.
                </div>
              </div>

              <div className="container-links-project">
                <a
                  href="https://github.com/EstebanMejiaD/portfolio-web-esteban-dev"
                  className="link-project"
                >
                  To GitHub{" "}
                  <i class="bi bi-arrow-up-right icon-arraw-project"></i>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-8">
            <div className="container-imagen-project container-project-right">
              <img src="./images/EstebanDev.png" alt="INOX BANK" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Works;
