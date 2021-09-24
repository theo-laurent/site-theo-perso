// components
import TopNav from "./components/topnav/TopNav";
import Banner from "./components/banner/Banner";
import Profil from "./components/profil/Profil";
import Banner2 from "./components/banner2/Banner2";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Banner3 from "./components/banner3/Banner3";
import Contact from "./components/contact/Contact";
import Bot from "./components/bot/Bot";
// import props
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Banner />
      <Profil />
      <Skills />
      <Banner2 />
      <Projects />
      <Banner3 />
      <Contact />
      <Bot />
    </div>
  );
}

export default App;
