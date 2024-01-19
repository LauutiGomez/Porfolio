import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

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
