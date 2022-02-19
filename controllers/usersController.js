const db = require("../models");

module.exports = {
//   findOne: function (req, res) {
//     db.User.find(req.body.user.email)
//       .then((dbModel) => res.json(dbModel))
//       .catch((err) => res.status(422).json(err));
//   },
  create: async function (req, res) {
    const user = req.body;
    
      db.User.create({
        firstName: user.first,
        lastName: user.last,
        uid: user.uid
      })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => {
          res.status(422).json(err);
          console.log(err);
        });
    }
  }
