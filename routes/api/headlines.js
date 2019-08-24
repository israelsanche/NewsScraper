var router = require("express").Router();
var db = require("../../models");


  // Find all headlines, sort them by date, send them back to the user
  const findAll= function(req, res) {
    db.Headline
      .find(req.query)
      .sort({ date: -1 })
      .then(function(dbHeadline) {
        res.json(dbHeadline);
      });
  }
  // Delete the specified headline
  const deleteHead= function(req, res) {
    db.Headline.remove({ _id: req.params.id }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  }
  // Update the specified headline
  const update= function(req, res) {
    db.Headline.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  }
router.get("/", findAll);
router.delete("/:id", deleteHead);
router.put("/:id", update);

module.exports = router;
