const express = require('express');
const postController = require('../controllers/post.controller');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/',
  authenticate,
  postController.getAllPosts);
  
module.exports = router;
