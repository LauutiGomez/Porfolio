import { useRef, useEffect, useState } from "react";
import { skills } from "../../data/technologies.json";
import { useIntersectionObserver } from "../../hook/useIntersectionObserver";

export const Skills = () => {
  const sectionSkills = useRef(null);
  const [skillNavbar, setskillNavbar] = useState(null);
  const [config, setConfig] = useState(undefined);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const handleIntersectionSkills = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillNavbar.classList.add("active");
      } else {
        skillNavbar.classList.remove("active");
      }
    });
  };

  useIntersectionObserver([sectionSkills], handleIntersectionSkills, config);
  
  useEffect(() => {
    const element = document.getElementById("navBar-Habilidades");
    setskillNavbar(element);
  }, [""]);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile)
      setConfig({
        root: null,
        threshold: 0.2,
      });
    else setConfig(undefined);
  }, [isMobile]);

  return (
    <section className="section-skills" id="skills" ref={sectionSkills}>
      <h2 className="title-skills">Habilidades</h2>
      <div className="container-skills">
        {skills.map((skill, i) => {
          const { name, skillsImageUrl } = skill;
          return (
            <li key={i} className={`icon-container-${name}`}>
              <img
                src={skillsImageUrl}
                alt="icono del stack que utilizo"
                className="icon-skills"
              />
              <span>{name}</span>
            </li>
          );
        })}
      </div>
    </section>
  );
};
