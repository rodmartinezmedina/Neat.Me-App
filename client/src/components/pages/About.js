import React, { Fragment } from "react";

const About = ({ iconGithub, iconLinkedin }) => {
  return (
    <Fragment>
      <h1> About this app </h1>
      <p> A simple app to keep your contacts and notes in order. </p>
      <p>(Coming soon: notes keeper functionality)</p>

      <h4>Neat.ME</h4>
      <p> Version: 1.0 </p>
      <hr />
      <br />
      <h2>About me</h2>
      <h3>Hi. I'm Rodrigo Martinez M.</h3>
      <p>
        A FullStack MERN developer based in Barcelona, Catalunya/Spain and an
        enthusiast of new techs on web development
      </p>
      <p>
        I was a Music Composer, Arranger and Sessionist before becoming a full
        time dev nerd.
      </p>
      <p>
        I also hold a university degree on Graphic Design which i guess kind of
        helps me with CSS and UIs.
      </p>
      <a
        href="https://github.com/rodmartinezmedina"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        <i className={iconGithub} />
        Check my Github
      </a>
      <a
        href="https://www.linkedin.com/in/rodrigo-martinez-medina/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark"
      >
        <i className={iconLinkedin} />
        Find me on Linkedin
      </a>
    </Fragment>
  );
};

About.defaultProps = {
  iconGithub: "fab fa-github",
  iconLinkedin: "fab fa-linkedin",
};

export default About;
