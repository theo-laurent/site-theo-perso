import React from "react";
// import css
import "../skills/skill.css";
// import modules
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import assets
import logohtml from "../../assets/logoSkills/logohtml.png";
import logocss from "../../assets/logoSkills/logocss.png";
import logojs from "../../assets/logoSkills/logojs.png";
import logonode from "../../assets/logoSkills/logonode.png";
import logomysql from "../../assets/logoSkills/logomysql.jpg";
import logoreact from "../../assets/logoSkills/logoreact.png";
import logomongodb from "../../assets/logoSkills/logomongodb.webp";

export default function Skills() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Mes compétences</h2>
      <div className="sliderSkills">
        <Slider {...settings}>
          <div className="sliderSkills_div">
            <img src={logohtml} alt="" />
          </div>
          <div className="sliderSkills_div">
            <img src={logocss} alt="" />
          </div>
          <div className="sliderSkills_div">
            <img src={logojs} alt="" />
          </div>
          <div className="sliderSkills_div">
            <img src={logoreact} alt="" />
          </div>
          <div className="sliderSkills_div">
            <img src={logonode} alt="" />
          </div>
          <div className="sliderSkills_div">
            <img src={logomysql} alt="" />
          </div>
          <div className="sliderSkills_div">
            <img src={logomongodb} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}
