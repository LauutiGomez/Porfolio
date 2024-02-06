export const Navbar = () => {
  return (
    <header>
      <nav className="navBar">
        <ul>
          <li id="navBar-Home">
            <a href="#home">Inicio</a>
          </li>
          <li id="navBar-Proyectos">
            <a href="#projects">Proyectos</a>
          </li>
          <li id="navBar-Habilidades">
            <a href="#skills">Habilidades</a>
          </li>
          <li id="navBar-SobreMi">
            <a href="#about">Sobre Mi</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
