import React, { useState, useEffect, useContext } from "react";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import debounce from "../notes/helpers";
import NotesContext from "../../contexts/notes/notesContext";
import AlertContext from "../../contexts/alert/alertContext";
import AuthContext from "../../contexts/auth/authContext";

const NotesEditor = () => {
  const alertContext = useContext(AlertContext);
  const notesContext = useContext(NotesContext);
  const authContext = useContext(AuthContext);

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
    // notecontent: "",
  });

  const { title, notecontent } = note;

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
      setAlert(`Please enter a title`, "danger");
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
        <h2>Write a note</h2>
        {/* <h2>{currentNote ? "Edit Contact" : "Add Contact"}</h2> */}
        <p>Please write something</p>
        <input
          type="text"
          placeholder="Note's Title"
          name="title"
          value={title}
          onChange={onChange}
        />
        <ReactQuill
          theme="snow"
          name="notecontent"
          value={notecontent}
          onChange={onChange}
        />

        {/* <input
          type="text"
          placeholder="Please write a note here"
          name="notecontent"
          value={notecontent}
          onChange={onChange}
        /> */}

        <input
          type="submit"
          value={currentNote ? "Update Note" : "Add Note"}
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default NotesEditor;

// class NotesEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//       title: "",
//     }; // You can also pass a Quill Delta here

//     this.handleTitleChange = this.handleTitleChange.bind(this);
//     this.handleTextChange = this.handleTextChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   setState;

//   handleTitleChange(value) {
//     this.setState({ title: value });
//   }

//   handleTextChange(value) {
//     this.setState({ text: value });
//   }

//   onSubmit = (e) => {
//     e.preventDefault();
//     console.log("asdfasdfasfsadfsa");
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onSubmit}>
//           <h2>Write a note</h2>
//           {/* <h2>{currentNote ? "Edit Contact" : "Add Contact"}</h2> */

//           <p>Please write something</p>
//           <input
//             type="text"
//             placeholder="Note's Title"
//             name="Title"
//             value={this.state.title}
//             onChange={this.handleTitleChange}
//           />
//         </form>
//         <ReactQuill value={this.state.text} onChange={this.handleTextChange} />
//       </div>
//     );
//   }
// }
