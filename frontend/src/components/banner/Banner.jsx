import "../banner/banner.css";
// import assets
import imgProfil4 from "../../assets/imgProfil4.jpg";

export default function Banner() {
  return (
    <div className="containerProfil" id="banner">
      <div className="profilTitle">
        <h2>Théo Laurent</h2>
        <h1>DEVELOPPEUR WEB</h1>
      </div>
      <div className="profilImage">
        <img src={imgProfil4} alt="" className="profilImage_img" />
      </div>
    </div>
  );
}
