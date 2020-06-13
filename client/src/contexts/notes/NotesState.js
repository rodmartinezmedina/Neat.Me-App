import React, { useReducer } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import NotesContext from "./notesContext";
import notesReducer from "./notesReducer";
import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  SET_CURRENT_NOTE,
  CLEAR_CURRENT_NOTE,
  UPDATE_NOTE,
  FILTER_NOTES,
  CLEAR_NOTES_FILTER,
  NOTE_ERROR,
  CLEAR_NOTES,
  ADDING_NOTE_STATE,
  UPDATE_NOTE_TITLE,
} from "../types";

const NotesState = (props) => {
  const initialState = {
    notes: null,
    currentNote: null,
    filteredNote: null,
    error: null,
    addingNote: false,
  };

  const [state, dispatch] = useReducer(notesReducer, initialState);

  //Get Notes
  const getNotes = async () => {
    try {
      const res = await axios.get("/api/notes");
      dispatch({ type: GET_NOTES, payload: res.data });
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
      });
    }
  };

  //Add Note
  const addNote = async (note) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/notes", note, config);
      dispatch({ type: ADD_NOTE, payload: res.data });
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  //changes state of adding note in state
  const addingNoteState = () => {
    console.log("addingNoteState funtion called");
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };

  //Delete Note
  const deleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);

      dispatch({ type: DELETE_NOTE, payload: id });
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Update Note
  const updateNote = async (note) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/notes/${note._id}`, note, config);
      dispatch({ type: UPDATE_NOTE, payload: res.data });
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
        payload: err.response.msg,
      });
    }
    dispatch({ type: UPDATE_NOTE, payload: note });
  };

  const updateNoteTitle = async (note) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/notes/${note._id}`, note, config);
      dispatch({ type: UPDATE_NOTE_TITLE, payload: res.data });
    } catch (err) {
      dispatch({
        type: NOTE_ERROR,
        payload: err.response.msg,
      });
    }
    dispatch({ type: UPDATE_NOTE, payload: note });
  };

  //Clear Notes
  const clearNotes = () => {
    dispatch({ type: CLEAR_NOTES });
  };

  //Set Current Note
  const setCurrentNote = (note) => {
    dispatch({ type: SET_CURRENT_NOTE, payload: note });
  };

  //Clear Current Note
  const clearCurrentNote = () => {
    dispatch({ type: CLEAR_CURRENT_NOTE });
  };

  //Filter Notes
  const filterNotes = (text) => {
    dispatch({ type: FILTER_NOTES, payload: text });
  };

  //Clear Filter
  const clearNotesFilter = (text) => {
    dispatch({ type: CLEAR_NOTES_FILTER });
  };

  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        currentNote: state.currentNote,
        filteredNote: state.filtered,
        error: state.error,
        getNotes,
        addNote,
        deleteNote,
        clearNotes,
        setCurrentNote,
        clearCurrentNote,
        updateNote,
        filterNotes,
        clearNotesFilter,
        updateNoteTitle,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
