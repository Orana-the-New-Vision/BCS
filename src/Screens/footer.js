import React, { useLayoutEffect } from "react";
import "./Footer.css";
import card from "../components/card.png";
function Footer() {
  return (
    <footer className="footer">
      <footer className="contacts">
        <h3>Contacts </h3>
        <div>E-mail: SaulGoodMan@gmail.com</div>
        <div>------------------------------------</div>
        <img width={200} src={card} />
      </footer>
      <footer className="contacts">
        <h3>Contents</h3>
        <p>
          <a href="/">Home</a>
        </p>
        <p>
          <a href="/about"> About</a>
        </p>
      </footer>
    </footer>
  );
}
export default Footer;
