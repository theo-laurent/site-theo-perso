import "./topnav.css";
import logo from "../../assets/logo.jpg";
//

export default function TopNav() {
  return (
    <div className="nav">
      <img src={logo} className="nav_img" alt="logo" />
      <ul className="nav_ul">
        <li className="nav_ul_li">
          <a href="#0">PROJETS </a>
        </li>
        <li className="nav_ul_li">
          <a href="#0">COMPETENCES </a>
        </li>
        <li className="nav_ul_li">
          <a href="#0">CONTACT </a>
        </li>
      </ul>
    </div>
  );
}
