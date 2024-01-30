import { skills } from "../../data/Tecnologias";

export const Skills = () => {
  return (
    <section className="section-skills">
      <h2 className="title-skills" id="skills">
        Habilidades
      </h2>
        <div className="container-skills">
          {skills.map((skill, i) =>{
            const {id, name, skillsImageUrl} = skill
            return(
                <li key={i} className={`icon-container-${name}`}>
                  <span>{name}</span>
                  <img src={skillsImageUrl} alt="icono del stack que utilizo" className="icon-skills"/>
                </li>
            )
          })}
      </div>
    </section>
  );
};
