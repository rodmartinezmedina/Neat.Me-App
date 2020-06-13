import React, { Fragment, useContext, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Divider, Button } from "@material-ui/core";
import sidebarStyles from "./styles/sidebar-styles";
import List from "@material-ui/core/List";

import NotesItem from "./NotesItem";
import NotesContext from "../../contexts/notes/notesContext";

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

  if (notes !== null) {
    return (
      <div>
        <List>
          {notes.map((_note, _index) => {
            return (
              <div key={_index}>
                <NotesItem
                  _note={_note}
                  _index={_index}
                  // selectedNoteIndex={selectedNoteIndex}
                  selectNote={this.selectNote}
                  deleteNote={this.deleteNote}
                ></NotesItem>
                <Divider></Divider>
              </div>
            );
          })}
        </List>
      </div>
    );
  } else {
    return <div>There are no notes to display</div>;
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

export default withStyles(sidebarStyles)(NoteList);
