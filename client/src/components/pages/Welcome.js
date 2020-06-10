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
        <div className="high-hero">
          <h1 class="animated-text-enter"> Neat.Me</h1>
          <h3>Keep your contacts and notes in one place</h3>
          {/* <img
          className="hero-welcome-img"
          src="/images/agenda-phone-crop.jpg"
          alt="rodrigoPhoto"
        /> */}
        </div>

        <div className="low-hero">
          <Link to="/signup" className="button with-borders-button">
            Signup
          </Link>
          <Link to="/login" className="button with-borders-button">
            Login
          </Link>
        </div>
      </section>

      <section className="extra-section">
        <h2 class="animated-text-enter"> Functionalities</h2>
      </section>
    </div>
  );
};

export default Home;
