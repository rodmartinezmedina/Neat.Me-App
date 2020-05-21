import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: "professional",
        id: 1,
        name: "Batman Cheto",
        email: "robinputo@gmail.com",
        phone: "666-456-789",
      },
      {
        type: "personal",
        id: 2,
        name: "Joe Mangarelo",
        email: "joemangarelo@gmail.com",
        phone: "222-456-789",
      },
      {
        type: "personal",
        id: 3,
        name: "Lio Messi",
        email: "liomessi@gmail.com",
        phone: "333-456-789",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
