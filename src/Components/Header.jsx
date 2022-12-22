import React from "react";

const Header = () => {
  return (
    <div id="headerInicio">
      <div className="container contenedorHeader">
        <div className="row RowHeader">
          <div className="col-md-10 container-h1principal">
            <h1 className="fontAbril h1Principal">
              <div className="fontAbril typing-achine">Hey.</div>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="fontAbril h1animation"
              >
                I'm Esteban Mejia and I'm a passionate fullstack web developer
                jr.
              </div>
            </h1>
          </div>
          {/* <div className="col-md-4">
            <div className="container-image">
                <img className='imagen-esteban' src="/images/fotoportafolio.png" alt="Esteban Mejia" />
            </div> 
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
