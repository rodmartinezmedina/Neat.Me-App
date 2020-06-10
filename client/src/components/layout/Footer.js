import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = ({ iconGithub, iconLinkedin, iconWebsite }) => {
  return (
    <div>
      <nav className="footer bg-secondary">
        <ul>
          <li id="footer-li">
            <a
              id="footer-text"
              href="https://github.com/rodmartinezmedina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={iconGithub} /> Visit my Github
            </a>
          </li>
          <li id="footer-li">
            <a
              id="footer-text"
              href="https://www.linkedin.com/in/rodrigo-martinez-medina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={iconLinkedin} /> Contact me on Linkedin
            </a>
          </li>
          <li id="footer-li">
            <Link to="/about">About Me & Neat.ME</Link>
          </li>
          <li id="footer-li">
            <a
              id="footer-text"
              href="https://rodmartinezmedina.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={iconWebsite} /> My personal Website
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Footer.defaultProps = {
  iconGithub: "fab fa-github",
  iconLinkedin: "fab fa-linkedin",
  iconWebsite: "fas fa-globe",
};

Footer.propTypes = {
  iconGithub: PropTypes.string.isRequired,
  iconLinkedin: PropTypes.string.isRequired,
  iconWebsite: PropTypes.string.isRequired,
};

export default Footer;
