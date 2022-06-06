const db = require("../models");

module.exports = {
  findOne: function (req, res) {
    db.User.findOne({ uid: req.params.uid })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .then(console.log(res))
      .catch((err) => {
        res.status(422).json(err);
        console.log(err);
      });
  },
};
