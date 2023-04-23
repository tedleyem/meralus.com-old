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
            I am,
            <br /> Because we are.
          </h1>
          <p>
            I'm a software engineer that likes to build and utilize open source solutions and technologies.
          </p>
            <h2><a href="https://github.com/tmeralus">My Projects</a></h2>
        </div>
        <div className="info-img">
          <img src={meralus} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
