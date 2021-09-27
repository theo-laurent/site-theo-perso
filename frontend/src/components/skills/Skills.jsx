// import css
import "../skills/skill.css";
// import carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import assets
import logohtml from "../../assets/skillsImages/logohtml.webp";
import logocss from "../../assets/skillsImages/logocss.webp";
import logojs from "../../assets/skillsImages/logojs.webp";
import logonode from "../../assets/skillsImages/logonode.webp";
import logomysql from "../../assets/skillsImages/logomysql.webp";
import logoreact from "../../assets/skillsImages/logoreact.webp";
import logomongodb from "../../assets/skillsImages/logomongodb.webp";

export default function Skills() {
  let settings;

  if (window.matchMedia("(min-width:400px)").matches) {
    settings = {
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      pauseOnHover: true,
    };
  } else {
    settings = {
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      pauseOnHover: true,
    };
  }

  return (
    <div className="skills" id="skills">
      <h1>Mes compétences</h1>
      <div className="sliderSkills">
        <Slider {...settings}>
          <div className="sliderSkills_div">
            <a
              href="https://developer.mozilla.org/fr/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logohtml} alt="" />
            </a>
          </div>
          <div className="sliderSkills_div">
            <a
              href="https://developer.mozilla.org/fr/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logocss} alt="" />
            </a>
          </div>
          <div className="sliderSkills_div">
            <a
              href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logojs} alt="" />
            </a>
          </div>
          <div className="sliderSkills_div">
            <a href="https://fr.reactjs.org/" target="_blank" rel="noreferrer">
              <img src={logoreact} alt="" />
            </a>
          </div>
          <div className="sliderSkills_div">
            <a href="https://nodejs.org/fr/" target="_blank" rel="noreferrer">
              <img src={logonode} alt="" />
            </a>
          </div>
          <div className="sliderSkills_div">
            <a
              href="https://www.mysql.com/fr/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logomysql} alt="" />
            </a>
          </div>
          <div className="sliderSkills_div">
            <a
              href="https://www.mongodb.com/fr-fr"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logomongodb} alt="" />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}
