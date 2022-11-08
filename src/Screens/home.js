import React, { Component } from "react";
import "./Home.css";
import goodman from "../components/welcome.png";
function Home() {
  return (
    <div className="container">
      <h1 className="headings">Welcome</h1>
      <div>
        <img src={goodman} />
      </div>
    </div>
  );
}
export default Home;
