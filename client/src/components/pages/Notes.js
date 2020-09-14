import React, { useState, useContext, useEffect } from "react";
import NotesList from "../notes/NotesList";
import NotesForm from "../notes/NotesForm";
// import NotesFilter from '../notes/NotesFilter';
import NotesContext from "../../contexts/notes/notesContext";
import AuthContext from "../../contexts/auth/authContext";

const Notes = () => {
  const notesContext = useContext(NotesContext);
  const authContext = useContext(AuthContext);

  const {} = notesContext;

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   getNotes();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div>
      <div className="boxes">
        <NotesForm />
      </div>
      <div className="boxes">
        {/* <NotesFilter /> */}
        <NotesList />
      </div>
    </div>
  );
};

export default Notes;
