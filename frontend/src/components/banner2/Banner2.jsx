import "./banner2.css";
//
import CV from "../../assets/CV.pdf";

export default function Banner2() {
  return (
    <div className="banner2">
      <h3>
        <a href={CV} target="_blank" rel="noreferrer">
          Cliquez pour découvrir mon CV
        </a>
      </h3>
    </div>
  );
}
