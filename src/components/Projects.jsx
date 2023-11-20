import React from "react";
import { dataProyects } from "./json/data.json";

export const Projects = () => {
  return (
    <div className="container-cards-proyects" id="proyects">
      {dataProyects.map((proyect) => {
        return (
          <div className="container-proyect">
            <img src={proyect.img} alt="" />
            <h2>{proyect.title}</h2>
            <p>{proyect.description}</p>
            <a href={proyect.deploy} className="">
              Page
            </a>
            <a href={proyect.repo} className="">
              Code
            </a>
          </div>
        );
      })}
    </div>
  );
};
