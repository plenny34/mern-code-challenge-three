const express = require('express');
const postController = require('./postController');

const postRouter = express.Router();
const postService = require('./postService');

function router() {
  const { getPosts, getPostById } = postController(postService);
  postRouter.route('/').get(getPosts);
  postRouter.route('/:id').get(getPostById);

  return postRouter;
}

module.exports = router;
