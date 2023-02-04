const userService = require('../services/user.service');
const authService = require('../services/auth.service');

const createUser = async (req, res) => {
  await userService.createUser(req.body);

  const authentication = await authService.authenticate(req.body);
  return res.status(201).send(authentication);
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

module.exports = {
    createUser,
    getAllUsers,
};