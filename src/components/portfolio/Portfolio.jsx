import React from "react";
import piDogs from "../../assets/piDogs.png";
import GameHub from "../../assets/GameHub.jpg";
import "./portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={piDogs} alt="piDogs" className="img" />
          </div>
          <h3>SPA(Single Page Application) Dogs</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ladisgodo/PI-Dogs-main"
              rel="noopener noreferrer"
              target="_blank"
              className="btn"
            >
              Repository
            </a>
            <a
              href="https://pi-dogs-main-pied.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={GameHub} alt="GameHub" />
          </div>
          <h3>GameHub e-commerce</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ladisgodo/Gamehub-PF"
              rel="noopener noreferrer"
              target="_blank"
              className="btn"
            >
              Repository
            </a>
            <a
              href="https://gamehub-chi.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
