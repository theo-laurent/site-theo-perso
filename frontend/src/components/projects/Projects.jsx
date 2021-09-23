import "./projects.css";
//
import image from "../../assets/img1.jpg";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Mes projets</h1>

      <div className="projects_container">
        <div className="projects_container_img">
          <img src={image} alt="" />
        </div>
        <div className="projects_container_Text">
          <h2>Titre</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
            numquam id veniam? Soluta veritatis maxime, adipisci molestiae eos
            repellendus fugiat blanditiis quam, tempora minima eaque. Voluptatem
            accusantium eum nesciunt blanditiis!
          </p>
        </div>
      </div>

      <div className="projects_container">
        <div className="projects_container_img">
          <img src={image} alt="" />
        </div>
        <div className="projects_container_Text">
          <h2>Titre</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
            numquam id veniam? Soluta veritatis maxime, adipisci molestiae eos
            repellendus fugiat blanditiis quam, tempora minima eaque. Voluptatem
            accusantium eum nesciunt blanditiis!
          </p>
        </div>
      </div>

      <div className="projects_container">
        <div className="projects_container_img">
          <img src={image} alt="" />
        </div>
        <div className="projects_container_Text">
          <h2>Titre</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
            numquam id veniam? Soluta veritatis maxime, adipisci molestiae eos
            repellendus fugiat blanditiis quam, tempora minima eaque. Voluptatem
            accusantium eum nesciunt blanditiis!
          </p>
        </div>
      </div>

      <div className="projects_container">
        <div className="projects_container_img">
          <img src={image} alt="" />
        </div>
        <div className="projects_container_Text">
          <h2>Titre</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
            numquam id veniam? Soluta veritatis maxime, adipisci molestiae eos
            repellendus fugiat blanditiis quam, tempora minima eaque. Voluptatem
            accusantium eum nesciunt blanditiis!
          </p>
        </div>
      </div>
    </div>
  );
}
