const express = require('express');
const userController = require('../controllers/user.controller');
const validateUserFields = require('../middlewares/validateUserFields');
const validateUserFieldsLength = require('../middlewares/validateUserFieldsLength');
const validateUserEmail = require('../middlewares/validateUserEmail');

const router = express.Router();

router.post('/', 
  validateUserFields,
  validateUserFieldsLength,
  validateUserEmail,
  userController.createUser);

module.exports = router;
