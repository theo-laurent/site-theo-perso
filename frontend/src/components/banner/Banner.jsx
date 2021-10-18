import "../banner/banner.css";
// import assets
import imgProfil4 from "../../assets/imgProfil4.webp";

export default function Banner() {
  return (
    <div className="containerProfil" id="banner">
      <div className="profilTitle">
        <h2>Théo Laurent</h2>
        <h1>DEVELOPPEUR FRONT-END</h1>
      </div>
      <div className="profilImage">
        <img
          src={imgProfil4}
          alt="Un ordinateur portable posé sur sur une table en bois clair, sobre, esthétique."
          className="profilImage_img"
        />
      </div>
    </div>
  );
}
