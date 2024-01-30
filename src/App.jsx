import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <main className="main">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </main>
  );
}

export default App;
