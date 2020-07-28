const express = require('express');
const postController = require('./postController');

const postRouter = express.Router();
const postService = require('./postService');

function router() {
  const { getPosts, getPostsHistory, getPostById, getPostsByUserId } = postController(postService);
  postRouter.route('/').get(getPosts);
  postRouter.route('/history').get(getPostsHistory);
  postRouter.route('/user').get(getPostsByUserId);
  postRouter.route('/:id').get(getPostById);

  return postRouter;
}

module.exports = router;
