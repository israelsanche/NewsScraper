var router = require("express").Router();

var db = require("../../models");


  const clearDB= function(req, res) {
    db.Headline.remove({})
      .then(function() {
        return db.Note.remove({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  }

router.get("/", clearDB);

module.exports = router;
