import "../banner/banner.css";
// import assets
import imgProfil from "../../assets/imgProfil.jpg";

export default function Banner() {
  return (
    <div className="containerProfil">
      <div className="profilTitle">
        <h2>Théo Laurent</h2>
        <h1>DEVELOPPEUR WEB</h1>
      </div>
      <div className="profilImage">
        <img src={imgProfil} alt="" className="profilImage_img" />
      </div>
    </div>
  );
}
