import React, { Component } from "react";
import "./Home.css";
import goodman from "../components/welcome.png";
import logo from "../components/logo.png";
import NavBar from "../utils/Bar";
import office from "../components/office.png";
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("header").style.width = "25%";
  } else {
    document.getElementById("header").style.width = "100%";
  }
}

function Home() {
  return (
    <div className="container">
      <header id="header" className="App-header">
        <img width="100%" src={logo} />
      </header>
      <NavBar />
      <h1 className="headings">Welcome</h1>
      <div>
        <p className="welcome">
          Hi. I'm Saul Goodman. Did you know that you have rights? The
          Constitution says you do, and so do I. I believe that, until proven
          guilty, every man, woman, and child in this country is innocent. And
          that's why I fight for you, Albuquerque!
        </p>
        <h1 className="header">Main Legal Practice Areas:</h1>
        <div className="themeC">
          <div className="cards">
            <h2>Elder law</h2>
            <p>
              Having a will is ipmortant. But knowing your family is protected
              is priceless. At SaulGoodMan we protect what matters most to you.
              Whether your goal is to preserve family assets, maintain
              independence as you age, or care for loved ones after you're gone.
              We can help! Don't expect more from your will than it can deliver
              get help from Albuquerque nist experienced elder care law team.
            </p>
          </div>
          <div className="cards">
            <h2>Criminal law</h2>
            <p>
              Having a will is ipmortant. But knowing your family is protected
              is priceless. At SaulGoodMan we protect what matters most to you.
              Whether your goal is to preserve family assets, maintain
              independence as you age, or care for loved ones after you're gone.
              We can help! Don't expect more from your will than it can deliver
              get help from Albuquerque nist experienced elder care law team.
            </p>
          </div>
        </div>
        <div className="quotes">
          <h3>Quotes</h3>
          <p>
            "Clearly His Taste In Women Is The Same As His Taste In Lawyers:
            <div>Only The Very Best... With Just A Right Amount Of Dirty!"</div>
          </p>
          <p>
            "Here in Saul Goodman & Associates we welcome all ages, all creeds,
            <div>
              all stripes. (...) What Colonel Sanders is to chicken, Saul
              Goodman is to the law.
            </div>
          </p>
        </div>
        <img src={goodman} />
      </div>
    </div>
  );
}
export default Home;
