const express = require("express"); // created instance of express here

const router = express.Router();

const usersController = require("../controllers/users_controller");

router.get("/profile", usersController.profile);

module.exports = router;
