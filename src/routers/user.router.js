const express = require('express');
const userController = require('../controllers/user.controller');
const validateUserFields = require('../middlewares/validateUserFields');
const validateUserFieldsLength = require('../middlewares/validateUserFieldsLength');
const validateUserEmail = require('../middlewares/validateUserEmail');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.post('/', 
  validateUserFields,
  validateUserFieldsLength,
  validateUserEmail,
  userController.createUser);
router.get('/',
  authenticate,
  userController.getAllUsers);
router.get('/:id',
  authenticate,
  userController.getUserById);
  
module.exports = router;
