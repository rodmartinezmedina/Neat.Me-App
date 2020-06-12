import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import sbItemStyles from "./styles/sbItemStyles";
import NotesContext from "../../contexts/notes/notesContext";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "./helpers";

const SidebarItemComponent = ({ note }) => {
  const notesContext = useContext(NotesContext);
  const { deleteNote, setCurrentNote, clearCurrentNote } = notesContext;

  const { _id, title, notecontent } = note;

  const { classes, selectedNoteIndex } = this.props;

  const onDelete = () => {
    deleteNote(_id);
    clearCurrentNote();
    console.log(`onDelete function `);
  };

  return (
    <div key={_id}>
      <ListItem
        className={classes.listItem}
        //selected is a property of the ListItem Component. if selected it will be highlighted
        // if selectedNoteIndex === _index then we consider the element as selected
        selected={selectedNoteIndex === _id}
        alignItems="flex-start"
      >
        <div
          className={classes.textSection}
          onClick={() => setCurrentNote(note)}
        >
          <ListItemText
            primary={note.title}
            secondary={removeHTMLTags(note.notecontent.substring(0, 30))}
          ></ListItemText>
        </div>
        <DeleteIcon
          onClick={() => onDelete()}
          className={classes.DeleteIcon}
        ></DeleteIcon>
      </ListItem>
    </div>
  );

  // selectNote = (n, i) => this.props.selectNote(n, i);
  // deleteNote = (note) => {
  //   if (
  //     window.confirm(`Are you sure you want to delete the note ${note.title}`)
  //   )
  //     this.props.deleteNote(note);
  // };
};

export default withStyles(sbItemStyles)(SidebarItemComponent);
