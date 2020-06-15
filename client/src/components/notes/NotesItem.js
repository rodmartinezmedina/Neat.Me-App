import React, { useContext } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import sbItemStyles from "./styles/sbItemStyles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

import { removeHTMLTags } from "./helpers";
import NotesContext from "../../contexts/notes/notesContext";

const NotesItem = ({ note }) => {
  const notesContext = useContext(NotesContext);
  const { deleteNote, setCurrentNote, clearCurrentNote } = notesContext;

  const { _id, title, notecontent } = note;

  // const { classes, selectedNoteIndex } = this.props;

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

  // return (
  //   <div key={_id}>
  //     <ListItem
  //       className={classes.listItem}
  //       //selected is a property of the ListItem Component. if selected it will be highlighted
  //       // if selectedNoteIndex === _index then we consider the element as selected
  //       selected={selectedNoteIndex === _id}
  //       alignItems="flex-start"
  //     >
  //       <div
  //         className={classes.textSection}
  //         onClick={() => setCurrentNote(note)}
  //       >
  //         <ListItemText
  //           primary={note.title}
  //           secondary={removeHTMLTags(note.notecontent.substring(0, 30))}
  //         ></ListItemText>
  //       </div>
  //       <DeleteIcon onClick={() => onDelete()}></DeleteIcon>
  //     </ListItem>
  //   </div>
  // );

  //////////////////////////////

  // selectNote = (n, i) => this.props.selectNote(n, i);
  // deleteNote = (note) => {
  //   if (
  //     window.confirm(`Are you sure you want to delete the note ${note.title}`)
  //   )
  //     this.props.deleteNote(note);
  // };
};

NotesItem.propTypes = {
  note: PropTypes.object.isRequired,
};

// export default NotesItem;
export default withStyles(sbItemStyles)(NotesItem);
