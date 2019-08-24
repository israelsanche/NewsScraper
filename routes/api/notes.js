var router = require("express").Router();
var db = require("../../models");


  // Find one note
  const findNote= function(req, res) {
    db.Note.find({ _headlineId: req.params.id }).then(function(dbNote) {
      res.json(dbNote);
    });
  }
  // Create a new note
  const createNote= function(req, res) {
    db.Note.create(req.body).then(function(dbNote) {
      res.json(dbNote);
    });
  }
  // Delete a note with a given id
  const deleteNote= function(req, res) {
    db.Note.remove({ _id: req.params.id }).then(function(dbNote) {
      res.json(dbNote);
    });
  }
router.get("/:id", findNote);
router.post("/", createNote);
router.delete("/:id", deleteNote);

module.exports = router;
