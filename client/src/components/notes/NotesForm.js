import React, { useState, useContext, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import sidebarStyles from "./styles/sidebar-styles";

import NotesContext from "../../contexts/notes/notesContext";
import AlertContext from "../../contexts/alert/alertContext";
import AuthContext from "../../contexts/auth/authContext";

const NotesForm = (props) => {
  //VARIABLES
  const notesContext = useContext(NotesContext);
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { clearErrors } = authContext;
  const { setAlert } = alertContext;

  const {
    error,
    addNote,
    updateNote,
    updateNoteTitle,
    clearCurrentNote,
    currentNote,
    notes,
    // addingNote,
    // addingNoteState,
  } = notesContext;

  const [note, setNote] = useState({
    title: "",
    notecontent: "",
  });

  const { title, notecontent } = note;

  //USEEFFECTS
  useEffect(() => {
    if (currentNote !== null) {
      setNote(currentNote);
    } else {
      setNote({
        title: "",
        notecontent: "",
      });
    }
  }, [error, authContext, notesContext, clearErrors, currentNote]);

  const onChange = (e) =>
    setNote({ ...note, [e.target.title]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setAlert(`Please enter a note title`, "danger");
    } else if (currentNote === null) {
      addNote(note);
    } else {
      updateNote(note);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrentNote();
  };
  //RENDER/RETURN
  if (notes !== null && notes.length === 0) {
    return <h4>Please write a note</h4>;
  }

  if (notes !== null) {
    return (
      <div>
        <form onSubmit={onsubmit}>
          <input
            type="text"
            placeholder="Enter note title"
            name="title"
            value={title}
            onKeyUp={(e) => updateNoteTitle(e.target.value)}
          />
          <input
            type="submit"
            value="Submit Note"
            className="btn btn-primary btn-block"
          />
        </form>
        <Button onClick={this.addingNoteState}>
          {" "}
          {this.state.addingNote ? "Cancel" : "New Note"}
        </Button>
        {this.state.addingNote ? <div></div> : null}
      </div>
    );
  } else {
    return <div>Add a note!</div>;
  }

  // newNoteBtnClick = () => {
  //   // console.log('new btn clicked');
  //   this.setState({ title: null, addingNote: !this.state.addingNote });
  // };

  // updateTitle = (txt) => {
  //   // console.log('HERE IT IS: ', txt);
  //   this.setState({ title: txt });
  // };

  // newNote = () => {
  //   // console.log(this.state)
  //   this.props.newNote(this.state.title);
  //   this.setState({ title: null, addingNote: false });
  // };

  // selectNote = (n, i) => this.props.selectNote(n, i);
  // deleteNote = (note) => this.props.deleteNote(note);
};

export default withStyles(sidebarStyles)(NotesForm);
