import "./App.css";
// components
import TopNav from "./components/topnav/TopNav";
import Profil from "./components/profil/Profil";
import Skills from "./components/skills/Skills";
import Slider from "./components/slider/Slider";
import Contact from "./components/contact/Contact";
import BottomNav from "./components/botnav/BotNav";
// import props
import { SliderData } from "./datas/SliderData";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Profil />
      <Skills />
      <Slider slides={SliderData} />
      <Contact />
      <BottomNav />
    </div>
  );
}

export default App;
