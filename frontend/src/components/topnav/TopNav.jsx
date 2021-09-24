import "./topnav.css";
//

export default function TopNav() {
  return (
    <div className="nav">
      <div className="nav_logo">
        <div className="nav_logo0"></div>
        <div className="nav_logo1"></div>
        <div className="nav_logo2"></div>
        <div className="nav_logo3"></div>
        <div className="nav_logo4"></div>
      </div>
      <ul className="nav_ul">
        <li className="nav_ul_li">
          <a href="#banner">ACCUEIL</a>
        </li>
        <li className="nav_ul_li">
          <a href="#projects">PROJETS</a>
        </li>
        <li className="nav_ul_li">
          <a href="#skills">COMPETENCES </a>
        </li>
        <li className="nav_ul_li">
          <a href="#contact">CONTACT </a>
        </li>
      </ul>
    </div>
  );
}
