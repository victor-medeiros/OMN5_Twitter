const express = require('express');
const TweetController = require('./Controllers/TweetController');
const LikeController = require('./Controllers/LikeController');

const routes = express.Router();

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.post('/tweets/like/:id', LikeController.store);

module.exports = routes;