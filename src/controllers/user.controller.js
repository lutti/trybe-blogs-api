const userService = require('../services/user.service');
const authService = require('../services/auth.service');

const createUser = async (req, res) => {
  await userService.createUser(req.body);

  const authentication = await authService.authenticate(req.body);
  res.status(201).send(authentication);
};

module.exports = {
    createUser,
};