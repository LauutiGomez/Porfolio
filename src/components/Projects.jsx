import React from "react";
import { dataProyects } from "./json/data.json";

export const Projects = () => {
  return (
    <section className="section-cards-proyects" id="projects">
      <h2 className="title-proyects">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon-projects"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 8l-4 4l4 4" />
          <path d="M17 8l4 4l-4 4" />
          <path d="M14 4l-4 16" />
        </svg>
        Proyectos
      </h2>
      <ul>
        {dataProyects.map((proyect) => {
          const { img, title, description, deploy, repo } = proyect;
          return (
            <li className="container-proyect">
              <h2>{title}</h2>
              <p>{description}</p>
              <img src={img} alt="" />
              <a href={deploy} className="">
                Page
              </a>
              <a href={repo} className="">
                Code
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
