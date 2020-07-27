const axios = require('axios');
const debug = require('debug')('app:postService');

function postService() {
  function getPosts() {
    debug('getting all posts');
    return new Promise((resolve, reject) => {
      axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
          debug(error);
        });
    });
  }

  function getPostById(id) {
    debug(`getting posts for ${id}`);
    return new Promise((resolve, reject) => {
      axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
          debug(error);
        });
    });
  }

  return {
    getPosts,
    getPostById
  };
}

module.exports = postService();
