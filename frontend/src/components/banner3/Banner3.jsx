import "./banner3.css";
//
import image1 from "../../assets/banner3Images/1.png";
import image2 from "../../assets/banner3Images/2.png";
import image3 from "../../assets/banner3Images/3.png";

export default function Banner3() {
  return (
    <div className="banner3">
      <div>
        <h3>Du code</h3>
        <img src={image3} alt="" />
      </div>
      <div>
        <h3>Du café</h3>
        <img src={image2} alt="" />
      </div>
      <div>
        <h3>De l'enthousiasme</h3>
        <img src={image1} alt="" />
      </div>
    </div>
  );
}
