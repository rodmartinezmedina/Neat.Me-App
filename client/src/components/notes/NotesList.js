import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { withStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import sidebarStyles from "./styles/sidebar-styles";

import NotesItem from "./NotesItem";
import NotesContext from "../../contexts/notes/notesContext";
import Spinner from "../layout/Spinner";

const NoteList = (props) => {
  //VARIABLES
  const notesContext = useContext(NotesContext);

  const {
    notes,
    filteredNote,
    currentNote,
    getNotes,
    addingNote,
    loading,
  } = notesContext;

  // const { classes } = this.props;

  //USEEFFECTS
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  //RENDER/RETURN
  // if (notes !== null && notes.length === 0 && !loading) {
  //   return <h4>Please add note</h4>;
  // }
  // if (notes !== null) {
  return (
    <div>
      <Fragment>
        <h2>Notes Collection</h2>
        {notes !== null && !loading ? (
          <TransitionGroup>
            {notes.map((note) => (
              <CSSTransition key={note._id} timeout={300} classNames="item">
                <NotesItem note={note} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
      </Fragment>
    </div>
  );
};

export default NoteList;

{
  /* <TransitionGroup>
{filteredNote !== null
  ? filteredNote.map((note) => (
      <CSSTransition key={note._id} timeout={300} classNames="item">
        <NotesItem note={note} />
      </CSSTransition>
    ))
  : 
  notes.map((note) => (
      <CSSTransition key={note._id} timeout={300} classNames="item">
        <NotesItem note={note} />
      </CSSTransition>
    ))}
</TransitionGroup> */
}
