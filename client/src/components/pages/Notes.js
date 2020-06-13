import React, { useState, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../../components/layout/Spinner";

import NotesEditor from "../notes/NotesEditor";
import NotesContext from "../../contexts/notes/notesContext";
import NotesSection from "../notes/NotesSection";
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

  if (notes !== null && notes.length === 0 && !loading) {
    return <h4>Please write a note</h4>;
  }
  return (
    <div className="notes-container">
      <div>{/* <NewNoteForm /> */}</div>
      {/* <NotesFilter /> */}
      <NotesForm />
      <NotesSection />
      {/* <NotesEditor /> */}
    </div>
  );
};

export default Notes;
