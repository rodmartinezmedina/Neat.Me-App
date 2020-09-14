import React, { useState, useContext, useEffect } from "react";
import NotesContext from "../../contexts/notes/notesContext";
import AlertContext from "../../contexts/alert/alertContext";
import AuthContext from "../../contexts/auth/authContext";

const NotesForm = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const notesContext = useContext(NotesContext);

  const { clearErrors } = authContext;
  const { setAlert } = alertContext;

  const {
    error,
    addNote,
    updateNote,
    clearCurrentNote,
    currentNote,
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

  const onChange = (e) => setNote({ ...note, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setAlert(`Please enter all fields`, "danger");
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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3> {currentNote ? "Edit Note" : "Add Note"}</h3>
        <h4>Please write a note</h4>
        <input
          type="text"
          placeholder="Enter note title"
          name="title"
          value={title}
          // onKeyUp={(e) => updateNoteTitle(e.target.value)}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Note Content"
          name="notecontent"
          value={notecontent}
          onChange={onChange}
        />

        <input
          type="submit"
          value={currentNote ? "Update Note" : "Add Note"}
          className="btn btn-primary btn-block"
        />
        {currentNote && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default NotesForm;
