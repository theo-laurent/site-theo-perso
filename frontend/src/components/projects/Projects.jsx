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
                  <img
                    src={projects.image}
                    alt="un ordinateur reprenant le visuel de chaque site présenté"
                  />
                </a>
              </div>
              <div className="projects_container_Text">
                <h2>{projects.title}</h2>
                <p>{projects.description}</p>
                <p>
                  - <strong>Frontend:</strong> {projects.frontend}
                </p>
                {projects.backend ? (
                  <p>
                    - <strong>Backend:</strong> {projects.backend}
                  </p>
                ) : null}
              </div>
              <a
                className="projects_container_link"
                href={projects.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le code sur Github
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
