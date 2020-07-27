const express = require('express');
const chalk = require('chalk');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const debug = require('debug')('app');

const app = express();
const port = process.env.PORT || 3000;

// view engine setup

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const indexRouter = require('./src/index/indexRoutes')();
const postRouter = require('./src/posts/postRoutes')();

app.use('/', indexRouter);
app.use('/posts', postRouter);

app.listen(port, () => {
  debug(`Server is listening on port ${chalk.green(port)}`);
});
