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

  function getCreatePostPage(req, res) {
    res.render('createPost', {
      title: 'Create a New Post'
    });
  }

  function createPost(req, res) {
    const { title, body, user } = req.body;

    (async function create() {
      const post = await postService.createNewPost(title, body, user);
      debug(post);
      res.render('post', {
        post
      });
    }())

  }

  return {
    getPosts,
    getPostsHistory,
    getPostById,
    getPostsByUserId,
    getCreatePostPage,
    createPost
  };
}

module.exports = postController;
