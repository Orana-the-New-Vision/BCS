import React from "react";
import { Link } from "react-router-dom";
import topnav from "./Bar.css";
import home from "../components/home.png";
import about from "../components/about.png";
function NavBar() {
  return (
    <nav class="topnav">
      <Link to="/">
        <img src={home} />
      </Link>
      <Link to="/about">
        <img src={about} />
      </Link>
    </nav>
  );
}
export default NavBar;
