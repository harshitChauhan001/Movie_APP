import React from "react";

import "../CSS/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>author: </p>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/harshit-chauhan-26076223b/"
        >
          <h1>h_Chauhan</h1>
        </a>
      </div>

      <div className="footer-content">
        <h4 className="footer-title">
          Watch HD Movie for Free ©2022 BingeFlix{" "}
        </h4>
        <p className="footer-description">
          Disclaimer: This site does not store any files on its server. All
          contents are provided by TMDB api.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
