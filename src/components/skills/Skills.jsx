import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiMaterialui, SiExpress, SiPostgresql, SiMysql, SiMongodb } from "react-icons/si";
import './skills.css'

function Skills() {
  return (
    <section id="skills" className="contenedor">
      <h5>What skills I have</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h2 className="title">FrontEnd Development</h2>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive size={'30px'} className="experience__details-icon" />
              <h3>HTML</h3>
            </article>
            <article className="experience__details">
              <DiCss3 size={'30px'} className="experience__details-icon" />
              <h3>CSS</h3>
            </article>
            <article className="experience__details">
              <FaReact size={'30px'} className="experience__details-icon" />
              <h3>React</h3>
            </article>
            <article className="experience__details">
              <SiRedux size={'30px'} className="experience__details-icon" />
              <h3>Redux</h3>
            </article>
            <article className="experience__details">
              <FaBootstrap size={'30px'} className="experience__details-icon" />
              <h3>Bootstrap</h3>
            </article>
            <article className="experience__details">
              <SiMaterialui size={'30px'} className="experience__details-icon" />
              <h3>Material UI</h3>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h2 className="title">BackEnd Development</h2>
        <div className="experience__content">
          <article className="experience__details">
            <FaNodeJs size={'30px'} className="experience__details-icon" />
            <h3>Node.js</h3>
          </article>
          <article className="experience__details">
            <SiExpress size={'30px'} className="experience__details-icon" />
            <h3>Express</h3>
          </article>
          <article className="experience__details">
            <SiPostgresql size={'30px'} className="experience__details-icon" />
            <h3>PostgreSQL</h3>
          </article>
          <article className="experience__details">
            <SiMongodb size={'30px'} className="experience__details-icon" />
            <h3>MongoDB</h3>
          </article>
          <article className="experience__details">
            <SiMysql size={'30px'} className="experience__details-icon" />
            <h3>MySQL</h3>
          </article>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
