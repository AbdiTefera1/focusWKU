const Post = require("../models/Post");

exports.getOnePost = (req, res) => {
  try {
    res.json({
      message: "get new posts",
      status: "status",
    });
  } catch (err) {
    res.json({ error: err });
  }
};

exports.getPosts = (req, res) => {};

exports.createPost = (req, res) => {
  const body = req.body;
  try {
    // const post = new Post.create({ body });
    console.log(body)
    const post = new Post(body)
    console.log(post)

    res.json({ post });
  } catch (err) {
    res.json({ err });
  }
};

exports.updatePost = (req, res) => {};

exports.deletePost = (req, res) => {};

exports.likePost = (req, res) => {};
