import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/blog"></Link>
        </li>
        <li>
          <Link to="/services"></Link>
        </li>
        <li>
          <Link to="/projects"></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;