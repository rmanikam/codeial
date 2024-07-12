// module.exports.posts = function (req, res) {
//   return res.render("users", {
//     post: "Hello",
//   });
// };

const Post = require("../models/post");

// we create a function create
module.exports.create = function (req, res) {
  // i need to create a new post

  Post.create(
    {
      content: req.body.content,
      user: req.user._id,
    },
    function (err, post) {
      if (err) {
        console.log("error in creating a post");
        return;
      }

      return res.redirect("back");
    }
  );
};
