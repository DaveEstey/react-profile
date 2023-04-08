import React from "react";
import ".././styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-social-icons">
        <h4>Find me at:</h4>
        <ul class="social-icons">
          <li>
            <a href="https://github.com/DaveEstey" class="social-icon">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/david-estey-72473a25a/"
              class="social-icon"
            >
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
