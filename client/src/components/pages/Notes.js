import React, { useState, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SidebarComponent from "../notes/sidebar";
import EditorComponent from "../notes/editor";
import NotesContext from "../../contexts/notes/notesContext";
import Spinner from "../../components/layout/Spinner";

const Notes = () => {
  const notesContext = useContext(NotesContext);

  const { notes, filteredNote, getNotes, loading } = notesContext;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  if (notes !== null && notes.length === 0 && !loading) {
    return <h4>Please write a note</h4>;
  }
  return (
    <div className="notes-container">
      <SidebarComponent />
      <EditorComponent />
    </div>
  );
};

export default Notes;

{
  /* <h1>Keep your notes organized</h1>
      <h2>Notes List functionality coming soon.....</h2>
      <ul>
        <li>Note </li>
        <li>Note </li>
        <li>Note </li>
        <li>Note </li>
        <li>Note </li>
      </ul> */
}
