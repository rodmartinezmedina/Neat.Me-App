import React, { useContext, useEffect } from "react";
import AuthContext from "../../contexts/auth/authContext";
import { Link } from "react-router-dom";

const Home = () => {
  const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   authContext.loadUser();
  //   //eslint-disable-next-line
  // }, []);

  return (
    <div className="page-container">
      <section className="hero welcome-hero">
        <h1 class="animated-text-enter"> Neat.Me</h1>
        <h3> Optimize yourself.</h3>
        <p>Keep your contacts and notes in one place</p>
        <img
          className="hero-welcome-img"
          src="/images/wide-rodrigo-LLD.jpg"
          alt="rodrigoPhoto"
        />
        <div className="low-hero">
          <h3>Start Using Neat.ME</h3>
          <Link to="/signup" className="button with-borders-button">
            Signup
          </Link>
          <Link to="/login" className="button with-borders-button">
            Login
          </Link>
        </div>
      </section>

      <section className="extra-section">
        <h2 class="animated-text-enter"> Skills & Techs I use</h2>
      </section>
    </div>
  );
};

export default Home;
