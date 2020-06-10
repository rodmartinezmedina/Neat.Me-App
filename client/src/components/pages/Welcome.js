import React, { useContext, useEffect } from "react";
import AuthContext from "../../contexts/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   authContext.loadUser();
  //   //eslint-disable-next-line
  // }, []);

  return (
    <div className="grid-2">
      <h1>Neat.ME App</h1>
      <h2>Welcome Page</h2>
    </div>
  );
};

export default Home;
