const express = require("express");
const router = express.Router();

//@route    GET  api/contacts
//@desc     Get all users Contacts
//@access   Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//@route    POST  api/contacts
//@desc     Add new Contact
//@access   Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

//@route    PUT  api/contacts
//@desc     Update Contact
//@access   Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route    DELETE  api/contacts
//@desc     Delete Contact
//@access   Private
router.delete("/:id", (req, res) => {
  res.send("Update contact");
});

module.exports = router;
