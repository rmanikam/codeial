const express = require("express"); // created instance of express here

const router = express.Router();
const passport = require("passport");

const postsController = require("../controllers/posts_controller");
router.post("/create", passport.checkAuthentication, postsController.create);

module.exports = router;
