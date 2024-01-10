import React from "react";
import twitter from "../assets/icons/twitter-white-2.svg";
import github from "../assets/icons/github.svg"; 
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <div className="copyright">
        <h3>copyright © {year} Tedley Meralus - All rights reserved.</h3>
      </div>
      <div className="foot-icons space-x-rem">
        <div className="foot-icon">
        <a href="https://twitter.com/techdadteddy" target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
        </div> 
        <div className="foot-icon">
        <a href="https://instagram.com/techdadteddy" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        </div> 
        <div className="foot-icon">
        <a href="https://linkedin.com/in/tmeralus" target="_blank" rel="noreferrer"> 
          <img src={linkedin} alt="linkedin" />
        </a>
        </div>
        <div className="foot-icon">
        <a href="https://github.com/tedleyem" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
        </div> 
      </div>
    </footer>
  );
}

export default Footer;
