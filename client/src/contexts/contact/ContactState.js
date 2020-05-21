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
        type: null,
        _id: "5ec5a6d86b75417021f541b4",
        name: "Batman Cheto",
        email: "robinputo@gmail.com",
        phone: "666-456-789",
      },
      {
        type: "personal",
        _id: "5ec5a19698f1216ad97ce6ce",
        name: "Joe Mangarelo",
        email: "joemangarelo@gmail.com",
        phone: "222-456-789",
      },
      {
        type: "personal",
        _id: "5ec5a17198f1216ad97ce6cd",
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
