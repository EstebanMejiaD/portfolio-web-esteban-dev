import React from "react";
import "./About.css";
const About = () => {
  const ListImages = {
    coffe: "./images/coffeTravel.jpg",
    principal: "./images/fotoportafolio.jpeg",
    futbol: "./images/futbolLove.jpg",
    guitar: "./images/guitarLove.jpeg",
    medellin: "./images/medellinMonumento.jpg",
  };

  const [also, setAlso] = React.useState(ListImages.principal);

  const isCoffe = () => {
    setAlso(ListImages.coffe);
  };

  const isTravel = () => {
    setAlso(ListImages.medellin);
  };
  const isMusic = () => {
    setAlso(ListImages.guitar);
  };
  const isFutbol = () => {
    setAlso(ListImages.futbol);
  };

  return (
    <section id="about">
      <div className="container">
        <h2 data-aos="zoom-in" className="fontAbril title-about text-center">
          My essence
        </h2>
      
      <div className="row">
        <div className="col-md-4">
          <div className="container-photo-principal">
            <div className="">
              <div className="row">
                  <div className="col-md-12 ">
                  <div
                    data-aos="zoom-in-right"
                    data-aos-duration="2000"
                    className="contenedor-imagen"
                  >
                    <img
                      className="imagenProfile-about"
                      src={also}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row section-also">
              <div className="col-md-12">
                <h3 data-aos="fade-right" className="mb-3">
                  I am also
                </h3>
              </div>

              <div className="col-md-12">
                <h5
                  data-aos="fade-right"
                  onClick={isCoffe}
                  className="option-also"
                >
                  Coffee Lover,{" "}
                </h5>
              </div>
              <div className="col-md-12">
                <h5
                  data-aos="fade-right"
                  onClick={isTravel}
                  className="option-also"
                >
                  I love to travel,
                </h5>
              </div>
              <div className="col-md-12">
                <h5
                  data-aos="fade-right"
                  onClick={isMusic}
                  className="option-also"
                >
                  Music fascinates me,
                </h5>
              </div>
              <div className="col-md-12">
                <h5
                  data-aos="fade-right"
                  onClick={isFutbol}
                  className="option-also"
                >
                  I am an excellent soccer player.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8 container-text-about">
          <div className="row">
            <div className="col-md-12 container-text-about-h5-p">
              <div className="container-h5-about">
                <h5 data-aos="zoom-in" data-aos-duration="2000" className="">
                  I am a junior Full-stack developer with 1 year of personal
                  experience in different projects carried out as I specialize
                  in different web technologies.
                </h5>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="">
                    <p
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      className="parraf-about"
                    >
                      I am 20 years old and I am studying systems engineering in
                      the ninth semester at the Universidad de la Costa, I
                      define myself as a talented person in various fields of
                      life, such as music, sports, astronomy and computer
                      science. My main vision is to apply to a company that is
                      thinking about the future with a constant desire to update
                      to give the best of myself.
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="col-md-6"
                >
                  <p className="parraf-about">
                    Until last year, 2022, I really came across the wonderful
                    world of web development, it's incredibly fascinating what
                    you can do in it and learn every technology from HTML to
                    React.js on the front-end or Node.js on the front-end.
                    back-end, they have helped me develop various projects, both
                    personal and group integrations for various people or small
                    companies.
                  </p>
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

export default About;
