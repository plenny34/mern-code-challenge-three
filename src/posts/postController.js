const debug = require('debug')('app:postController');

function postController(postService) {
  function getPosts(req, res) {
    (async function getAllPosts() {
      debug(__dirname);
      const posts = await postService.getPosts();
      res.render('postMain', {
        title: "Pat's Test Blog",
        posts
      });
    }()
    );
  }

  function getPostsHistory(req, res) {
    (async function getOlderPosts() {
      debug(__dirname);
      const posts = await postService.getPosts();
      res.render('olderPosts', {
        title: "Pat's Test Blog",
        posts
      });
    }()
    );
  }

  function getPostById(req, res) {
    const { id } = req.params;

    (async function getPostById() {
      const post = await postService.getPostById(id);
      debug(post);
      res.render('post', {
        post
      });
    }()
    );
  }

  return {
    getPosts,
    getPostsHistory,
    getPostById
  };
}

module.exports = postController;
