// react
import { useState } from "react";
//css
import "../slider/slider.css";
// datas
import { SliderData } from "../../datas/SliderData.js";
// icons
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function Slider(props) {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(props.slides) || length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowCircleLeft className="slider_leftarrow" onClick={prevSlide} />
      <FaArrowCircleRight className="slider_rightarrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slider_slide-active" : "slider_slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="img" className="slider_image" />
            )}
          </div>
        );
      })}
    </section>
  );
}
