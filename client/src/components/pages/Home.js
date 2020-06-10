import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../contexts/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="contacts-container form-container">
      <div className="boxes">
        <ContactForm />
      </div>
      <div className="boxes">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
