import React, { useState, useRef, useEffect } from "react";
import { useIntersectionObserver } from "../../hook/useIntersectionObserver";

export const About = () => {

  const sectionAbout= useRef(null);
  const [aboutNavbar, setaboutNavbar] = useState(null);

  
  const handleIntersectionAbout = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutNavbar.classList.add("active");
      } else {
        aboutNavbar.classList.remove("active");
      }
    });
  };

  useIntersectionObserver([sectionAbout], handleIntersectionAbout);
  
  useEffect(() => {
    const element = document.getElementById("navBar-SobreMi");
    setaboutNavbar(element);
  }, [""]);

  return (
    <section ref={sectionAbout}>
      <h2 className="title-skills" id="about">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          className="icon-sobre-mi"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
        Sobre mi
      </h2>
      <article className="article-aboutme">
        <div className="container-parrafos-aboutme">
          <p>
            ¡Hola 👋🏻! Mi nombre es Lautaro, tengo 28 años y soy de la vibrante
            ciudad de Buenos Aires, Argentina.
          </p>
          <p>
            Cuando no estoy inmerso en el mundo del Desarrollo Web, disfruto
            jugando futbol con amigos o gameplays, como asi tambien un buen mate
            🧉 y una buena charla.
          </p>
        </div>
        <img src="./src/assets/img/sobre-mi.gif" alt="imagen gif de un programador" />
      </article>
    </section>
  );
};
