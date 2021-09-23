import "./App.css";
// components
import TopNav from "./components/topnav/TopNav";
import Banner from "./components/banner/Banner";
import Profil from "./components/profil/Profil";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Bot from "./components/bot/Bot";
// import props

function App() {
  return (
    <div className="App">
      <TopNav />
      <Banner />
      <Profil />
      <Skills />
      <Projects />
      <Contact />
      <Bot />
    </div>
  );
}

export default App;
