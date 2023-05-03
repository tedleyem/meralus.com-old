import React from "react";
import NavBar from "./NavBar";
import meralus from "../assets/images/ted-portfolio.png";

function Header() {
  return (
    <header>
      <NavBar />
      <div className="info space-x-2">
        <div className="info-1">
          <button>Linux Engineer</button>
          <h1>
            If passion drives you,
            <br /> let reason hold the reins.
          </h1>
          <a className="green" href="mailto:tmeralus@protonmail.com">Let&#39;s chat!</a>

        </div>
        <div className="info-img">
          <img src={meralus} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
