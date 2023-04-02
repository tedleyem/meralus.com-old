import React from "react";
import twitter from "../assets/icons/twitter-blue96.svg";
import github from "../assets/icons/github.svg"; 
import linkedin from "../assets/icons/linkedin.svg";

function Footer() {
  return (
    <footer>
      <div className="copyright">
        <h3>copyright © 2023 Tedley Meralus - All rights reserved.</h3>
      </div>
      <div className="foot-icons space-x-rem">
        <div className="foot-icon">
          <img src={twitter} alt="twitter" />
        </div> 
        <div className="foot-icon">
          <img src={linkedin} alt="linkedin" />
        </div>
        <div className="foot-icon">
          <img src={github} alt="github" />
        </div> 
      </div>
    </footer>
  );
}

export default Footer;
