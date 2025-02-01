import React, { useState, useRef, useEffect } from "react";
import { useIntersectionObserver } from "../../hook/useIntersectionObserver";
import { experiences } from "../../data/experiences.json";

export const Experience = () => {
  const sectionExperiences = useRef(null);
  const [experiencesNavbar, setExperiencesNavbar] = useState(null);
  const [config, setConfig] = useState(undefined);
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 390);

  const handleIntersectionExperiences = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        experiencesNavbar.classList.add("active");
      } else {
        experiencesNavbar.classList.remove("active");
      }
    });
  };

  useIntersectionObserver(
    [sectionExperiences],
    handleIntersectionExperiences,
    config
  );

  useEffect(() => {
    const element = document.getElementById("navBar-Experiencia");
    setExperiencesNavbar(element);
  }, [""]);

  const handleResize = () => {
    setIsMobile(window.innerWidth >= 390);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile)
      setConfig({
        root: null,
        threshold: 0.5,
      });
    else setConfig(undefined);
  }, [isMobile]);

  return (
    <section id="experiencia" ref={sectionExperiences}>
      <h2 className="title-experiencia">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon-experiencia"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
        </svg>
        Experiencia Laboral
      </h2>
      <div className="container-experiencia">
        <ol className="timeline">
          {experiences.map((exp, index) => {
            const { date, title, description, link } = exp;
            return (
              <li key={index} className="timeline-item">
                <div className="timeline-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                    <path d="M12 12l0 .01" />
                    <path d="M3 13a20 20 0 0 0 18 0" />
                  </svg>
                </div>
                <h3 className="timeline-title">{title}</h3>
                <time className="timeline-date">{date}</time>
                <p className="timeline-description">{description}</p>
                {link && (
                  <a href={link} className="timeline-link" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="timeline-link-icon"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M3.6 9h16.8" />
                      <path d="M3.6 15h16.8" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                    Sitio Web
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
