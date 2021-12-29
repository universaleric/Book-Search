const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const db = require("../models");

module.exports = {
  findOne: function (req, res) {
    db.User.find(req.body.user.email)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: async function (req, res) {
    const user = req.body;
    const takenEmail = await User.findOne;

    if (!req.body.user.email) {
      return res.status(422).json({ errors: { email: "can't be blank" } });
    }

    if (!req.body.user.password) {
      return res.status(422).json({ errors: { password: "can't be blank" } });
    }

    if (takenEmail) {
      res.json({ message: "Email has already been taken." });
    } else {
      user.password = await bcrypt.hash(req.body.password, 10);

      db.User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email.toLowerCase(),
        password: user.password,
      })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => {
          res.status(422).json(err);
          console.log(err);
        });
    }
  },
};
