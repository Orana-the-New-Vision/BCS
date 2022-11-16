import React, { useLayoutEffect } from "react";
import "./Footer.css";
import card from "../assets/card.png";
function Footer() {
  return (
    <footer id="footer">
      <footer className="stuff">
        <h3>Contacts </h3>
        <div>E-mail: SaulGoodMan@gmail.com</div>
        <div>------------------------------------</div>
        <img width={200} style={{ marginBottom: "10px" }} src={card} />
      </footer>
      <footer className="stuff">
        <h3>Contents</h3>
        <p>
          <a className="links" href="/">
            Home
          </a>
        </p>
        <p>
          <a className="links" href="/about">
            About
          </a>
        </p>
      </footer>
    </footer>
  );
}
export default Footer;
