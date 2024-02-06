import { useRef, useEffect, useState } from "react";
import { skills } from "../../data/tecnologias.json";
import { useIntersectionObserver } from "../../hook/useIntersectionObserver";
export const Skills = () => {
  const sectionSkills = useRef(null);
  const [skillNavbar, setskillNavbar] = useState(null);

  
  const handleIntersectionSkills = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillNavbar.classList.add("active");
      } else {
        skillNavbar.classList.remove("active");
      }
    });
  };

  useIntersectionObserver([sectionSkills], handleIntersectionSkills);
  
  useEffect(() => {
    const element = document.getElementById("navBar-Habilidades");
    setskillNavbar(element);
  }, [""]);

  return (
    <section className="section-skills" id="skills" ref={sectionSkills}>
      <h2 className="title-skills">Habilidades</h2>
      <div className="container-skills">
        {skills.map((skill, i) => {
          const { name, skillsImageUrl } = skill;
          return (
            <li key={i} className={`icon-container-${name}`}>
              <span>{name}</span>
              <img
                src={skillsImageUrl}
                alt="icono del stack que utilizo"
                className="icon-skills"
              />
            </li>
          );
        })}
      </div>
    </section>
  );
};
