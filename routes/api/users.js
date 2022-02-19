const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
  .route("/")
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")

module.exports = router;
