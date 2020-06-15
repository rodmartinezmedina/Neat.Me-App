import React, { useState, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../../components/layout/Spinner";
import ReactQuill from "react-quill";

import NotesContext from "../../contexts/notes/notesContext";
import NotesForm from "../notes/NotesForm";
import NotesList from "../notes/NotesList";
import NotesEditor from "../notes/NotesEditor";

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
      {/* <NotesForm /> */}
      {/* <ReactQuill /> */}
      <NotesList />

      <NotesEditor />
    </div>
  );
};

export default Notes;
