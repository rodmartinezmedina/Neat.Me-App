const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const User = require("../models/UserModel");
const Note = require("../models/NoteModel");

//@route    GET  api/notes
//@desc     Get all users Notes
//@access   Private
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route    POST  api/notes
//@desc     Add new Note
//@access   Private
router.post(
  "/",
  [auth, [check("title", "Title is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, notecontent } = req.body;

    try {
      const newNote = new Note({
        title,
        notecontent,
        user: req.user.id,
      });

      const note = await newNote.save();

      res.json(note);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route    PUT  api/notes
//@desc     Update Note
//@access   Private
router.put("/:id", auth, async (req, res) => {
  const { title, notecontent } = req.body;

  //Build contact object
  const noteFields = {};
  if (name) noteFields.title = title;
  if (name) noteFields.notecontent = notecontent;

  try {
    let note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ msg: "Note not found" });

    //Make sure user owns contact.
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: `Not authorized` });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: noteFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    DELETE  api/contacts
//@desc     Delete Contact
//@access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ msg: "Note not found" });

    //Make sure user owns contact.
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: `Not authorized` });
    }

    await Note.findByIdAndRemove(req.params.id);

    res.json({ msg: `Note removed` });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
