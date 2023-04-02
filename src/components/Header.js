import React from "react";
import NavBar from "./NavBar";
import meralus from "../assets/images/ted-6-rings-devop.png";

function Header() {
  return (
    <header>
      <NavBar />
      <div className="info space-x-2">
        <div className="info-1">
          <button>Software Engineer</button>
          <h1>
            Talk is cheap.
            <br /> Show me the code!
          </h1>
          <p>
            I design and build open source solutions, and I love what I do.
          </p>
          <h2>Read my Docs</h2>
        </div>
        <div className="info-img">
          <img src={meralus} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
