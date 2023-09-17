const express = require("express");
const {
  getOnePost,
  getPosts,
  createPost,
  updatePost,
  likePost,
  deletePost,
} = require("../controller/postCtrl");

const postRouter = express.Router();

postRouter.get("/:id", getOnePost);
postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.put("/:id", updatePost);
postRouter.put("/:id/likes", likePost);
postRouter.delete("/:id", deletePost);

module.exports = postRouter;
