const express = require('express');

const indexRouter = express.Router();

function router() {
  indexRouter.route('/').get((req, res) => {
    res.render('index', { title: 'Liberty Mutual Blog Application' });
  });

  return indexRouter;
}

module.exports = router;
