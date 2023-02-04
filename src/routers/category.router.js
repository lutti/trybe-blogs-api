const express = require('express');
const categoryController = require('../controllers/category.controller');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.post('/',
  authenticate,
  categoryController.createCategory);
router.get('/',
  authenticate,
  categoryController.getAllCategories);
  
module.exports = router;
