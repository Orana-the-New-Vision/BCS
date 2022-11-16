import React from "react";
import { Link } from "react-router-dom";
import "./Bar.css";
import home from "../assets/home.png";
import about from "../assets/about.png";
function NavBar() {
  return (
    <nav class="topnav">
      <a href="/">
        <img src={home} />
      </a>
      <a href="/about">
        <img src={about} />
      </a>
    </nav>
  );
}
export default NavBar;
