import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <main className="main">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
    </main>
  );
}

export default App;
