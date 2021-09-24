import "./projects.css";
//
import { ProjectsData } from "../../datas/ProjectsData";

export default function Projects() {
  return (
    <div className="globalProjects" id="projects">
      <h1>Mes projets</h1>
      <div className="projects">
        {ProjectsData.map(function (projects, index) {
          return (
            <div className="projects_container" key={index + projects.title}>
              <div className="projects_container_img">
                <a href={projects.lien} target="_blank" rel="noreferrer">
                  <div className="projects_container_img_overlay"></div>
                  <img src={projects.image} alt="" />
                </a>
              </div>
              <div className="projects_container_Text">
                <h2>{projects.title}</h2>
                <p>{projects.description}</p>
                <p>{projects.techno}</p>
                <a
                  href={projects.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le code sur Github
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}