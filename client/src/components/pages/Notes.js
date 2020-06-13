import React, { useState, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../../components/layout/Spinner";

import NotesEditor from "../notes/NotesEditor";
import NotesContext from "../../contexts/notes/notesContext";
import NotesList from "../notes/NotesList";
import NotesForm from "../notes/NotesForm";

const Notes = () => {
  const notesContext = useContext(NotesContext);

  const {
    notes,
    currentNote,
    filteredNote,
    getNotes,
    loading,
    addingNote,
  } = notesContext;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* <NotesFilter /> */}
      <NotesForm />
      <NotesList />
      {/* <NotesEditor /> */}
    </div>
  );
};

export default Notes;
