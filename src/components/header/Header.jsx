import React from "react";
import CTA from "./CTA/CTA.jsx";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import ME from "../../assets/me.png";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ladislao Godocik</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
}

export default Header;
