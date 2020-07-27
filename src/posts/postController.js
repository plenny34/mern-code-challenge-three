const debug = require('debug')('app:postController');

function postController(postService) {
  function getPosts(req, res) {
    (async function getPosts() {
      const posts = await postService.getPosts();
      res.send(posts);
    }()
    );
  }

  function getPostById(req, res) {
    const { id } = req.params;

    (async function getPostById() {
      const post = await postService.getPostById(id);
      res.send(post);
    }()
    );
  }

  return {
    getPosts,
    getPostById
  };
}

module.exports = postController;
