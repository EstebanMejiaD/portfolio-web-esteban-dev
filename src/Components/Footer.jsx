import React from "react";

const Footer = () => {
  return (
    <div className=" footer ">
      <div className="container pb-2">
        <div className="row">
          <div className="col-md-8 container-link-contact-footer">
            <a className="link-contact-footer" href="https://twitter.com/mejiaesteban08">Twitter</a>
            <a className="link-contact-footer" href="https://github.com/EstebanMejiaD">GitHub</a>
            <a className="link-contact-footer" href="https://www.linkedin.com/in/esteban-andres-mej%C3%ADa-de-la-hoz-4515a318b/">LinkedIn</a>
          </div>
          <div className="col-md-4 copy-text">
          ©2023 by EstebDev.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
