import React from "react";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6

class NotesEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", title: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setState;

  handleChange(value) {
    this.setState({ text: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("asdfasdfasfsadfsa");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>Write a note</h2>
          {/* <h2>{currentNote ? "Edit Contact" : "Add Contact"}</h2> */}
          <p>Please write something</p>
          <input
            type="text"
            placeholder="Note's Title"
            name="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </form>
        <ReactQuill value={this.state.text} onChange={this.handleChange} />
      </div>
    );
  }
}

export default NotesEditor;
