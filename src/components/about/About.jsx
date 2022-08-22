import React from "react";
import icon from "../../assets/icon.jpg";
import "./about.css";

function About() {
  return (
    <section id="about" className="contenedor">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={icon} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <p>
            Hi, I'm a Full Stack Junior developer, born in Rosario, Santa Fe,
            Argentina. I love programming, organized teamwork and goal
            achievement. I consider myself a responsible, dynamic and creative
            person, with ease of adaptation. At the beginning of the year 2022 I
            began to dedicate myself 100% to studying for Full Stack Web
            Developer, studying JavaScript, in addition to other Frontend
            technologies such as React and Redux, for the Backend technologies
            such as Node, Express and Sequelize and agile methodologies such as
            SCRUM.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
