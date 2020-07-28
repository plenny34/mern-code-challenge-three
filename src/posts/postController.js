const debug = require('debug')('app:postController');

function postController(postService) {
  function getPosts(req, res) {
    (async function getAllPosts() {
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
      const posts = await postService.getPosts();
      res.render('postList', {
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

  function getPostsByUserId(req, res) {
    const { userId } = req.query;

    (async function getPostsUserId() {
        const posts = await postService.getPostsByUser(userId);
        debug(posts);
        res.render('postList', {
          title: `Blogs by ${userId}`,
          posts
        });
      }()
    );
  }

  return {
    getPosts,
    getPostsHistory,
    getPostById,
    getPostsByUserId
  };
}

module.exports = postController;
