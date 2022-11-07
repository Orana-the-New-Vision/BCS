import React from "react";
import { Link } from "react-router-dom";
import topnav from "./Bar.css";

function NavBar() {
  return (
    <nav class="topnav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
export default NavBar;
