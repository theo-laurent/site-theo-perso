import { useState } from "react";
import "./topnav.css";
//

export default function TopNav() {
  const [toggle, setToggle] = useState(false);

  function navClick() {
    return setToggle(!toggle);
  }

  return (
    <nav className="nav">
      <div className="nav_logo">
        <div className="nav_logo0"></div>
        <div className="nav_logo1"></div>
        <div className="nav_logo2"></div>
        <div className="nav_logo3"></div>
        <div className="nav_logo4"></div>
      </div>
      <div className="nav_responsive" onClick={navClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="black"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>

        <ul
          className={
            toggle ? "nav_responsive_ul-open" : "nav_responsive_ul-close"
          }
        >
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
    </nav>
  );
}
