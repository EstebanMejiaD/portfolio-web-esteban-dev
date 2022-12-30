import React from "react";

const MiniAreaContact = () => {
  return (
    <div>
      <div id="miniContacto" className="container miniAreaContacto text-center">
        <div data-aos="fade-right" className="row">
          <p className="contact-p">Esteban Mejia</p>
          <p className="">full stack developer</p>
        </div>
        <div className="row contenedor-links text-center">
          <a
            data-aos="fade-up"
            data-aos-duration="500"
            className="links-contact first-item-contact"
            rel="noreferrel"
            href="https://twitter.com/mejiaesteban08"
          >
            <i class="bi bi-twitter "></i>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            rel="noreferrel"
            className="links-contact"
            href="https://api.whatsapp.com/send/?phone=573043112837&text&type=phone_number&app_absent=0"
          >
            <i class="bi bi-whatsapp "></i>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1500"
            rel="noreferrel"
            className="links-contact"
            href="https://github.com/EstebanMejiaD"
          >
            <i class="bi bi-github"></i>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="2000"
            rel="noreferrel"
            className="links-contact"
            href="https://www.linkedin.com/in/esteban-andres-mej%C3%ADa-de-la-hoz-4515a318b/"
          >
            <i class="bi bi-linkedin"></i>
          </a>

          <a
            data-aos="fade-up"
            data-aos-duration="2500"
            rel="noreferrel"
            className="links-contact"
            href="https://www.facebook.com/esteban.mejia.3192"
          >
            <i class="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniAreaContact;
