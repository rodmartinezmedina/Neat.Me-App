import React, { useContext } from "react";
import PropTypes from "prop-types";
import NotesContext from "../../contexts/notes/notesContext";

const NotesItem = ({ note }) => {
  const notesContext = useContext(NotesContext);

  const { deleteNote, setCurrentNote, clearCurrentNote } = notesContext;

  const { _id, title, notecontent } = note;

  const onDelete = () => {
    deleteNote(_id);
    clearCurrentNote();
    console.log(`onDelete function `);
  };

  return (
    <div className="card bg-light">
      <h3>{title}</h3>
      <p>{notecontent}</p>

      <p>
        <button
          className=" btn btn-secondary btn-sm"
          onClick={() => setCurrentNote(note)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

NotesItem.propTypes = {
  note: PropTypes.object.isRequired,
};

// export default NotesItem;
export default NotesItem;
