import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Experience } from "./components/experience/Experience";

function App() {
  return (
    <main className="main">
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <section className="starsContainer">
      <div className="smallStars"></div>
      <div className="medStars"></div>
      <div className="largeStars"></div>
      </section>
    </main>
  );
}

export default App;
