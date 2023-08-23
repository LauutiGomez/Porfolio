export const Home = () => {
  return (
    <section className="section-home">
      <div className="home-aboutme">
        <h1>Lautaro Gomez, 👋🏻</h1>
        <h3>Fron-End Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          nesciunt veniam, nisi facilis similique ducimus error, quam
          exercitationem adipisci ratione reprehenderit, consectetur eaque hic
          libero beatae? Nam saepe quidem molestiae!
        </p>
        <button className="button-cv">
          <span className="button-content-cv">Descargar CV </span>
        </button>
      </div>
      <div className="home-img">
        <img src="./src/assets/lautaro-gomez.png" alt="" />
      </div>
    </section>
  );
};
