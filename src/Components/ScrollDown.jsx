import React from "react";

const ScrollDown = () => {
  const irArriba = () => {
    window.addEventListener("scroll", () => {
      var scroll = document.documentElement.scrollTop;
      console.log(scroll);
    });
  };

  irArriba();

  return (
    <div>
      <a href="#headerInicio">
        <i id="botonArriba" class="bi bi-arrow-down-circle"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
