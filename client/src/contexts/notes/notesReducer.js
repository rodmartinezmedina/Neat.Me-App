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
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
        loading: false,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id ? action.payload : note
        ),
        loading: false,
      };

    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
        loading: false,
      };
    case CLEAR_NOTES:
      return {
        ...state,
        notes: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT_NOTE:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_NOTE:
      return {
        ...state,
        current: null,
      };
    case FILTER_NOTES:
      return {
        ...state,
        filtered: state.notes.filter((note) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return note.name.match(regex) || note.email.match(regex);
        }),
      };
    case CLEAR_NOTES_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case NOTE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
