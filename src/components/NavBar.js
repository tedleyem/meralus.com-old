import React from "react";

function NavBar() {
  return (
    <nav>
      <div>
        <h2>Tedley Meralus</h2>
      </div>
      <div>
        <ul className="space-x">
          <li>
            <a className="green-text" href="/">
              {"< Home />"}
            </a>
          </li>
          <li>
            <a href="#about">About Me.</a>
          </li> 
          <li>
            <a href="https://github.com/tedleyem">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
