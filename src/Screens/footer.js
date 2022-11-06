import React, { useLayoutEffect } from "react";
function Footer() {
  return (
    <footer>
      <footer className="footer">
        <h3>Contacts </h3>
        <p>E-mail: SaulGoodMan@gmail.com</p>
        <p>***</p>
      </footer>
      <footer className="footerLinks">
        <h3>Contents</h3>
        <p>
          <a href="/" className="footerLinks">
            Home
          </a>
        </p>
        <p>
          <a href="/about" className="footerLinks">
            {" "}
            About
          </a>
        </p>
      </footer>
    </footer>
  );
}
export default Footer;
