import "./banner2.css";
//
import CV from "../../assets/CV.pdf";

export default function Banner2() {
  return (
    <div className="banner2">
      <a href={CV} target="_blank" rel="noreferrer">
        <h3> Cliquez pour découvrir mon CV</h3>
      </a>
    </div>
  );
}
