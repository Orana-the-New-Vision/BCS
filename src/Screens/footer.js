import React, { useLayoutEffect } from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <footer>
        <h3 className="contacts">Contacts </h3>
        <p className="contacts">E-mail: SaulGoodMan@gmail.com</p>
        <p className="contacts">***</p>
      </footer>
      <footer>
        <h3 className="content">Contents</h3>
        <p>
          <a href="/" className="content">
            Home
          </a>
        </p>
        <p>
          <a href="/about" className="content">
            {" "}
            About
          </a>
        </p>
      </footer>
    </footer>
  );
}
export default Footer;
