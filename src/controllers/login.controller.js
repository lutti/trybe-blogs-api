const authService = require('../services/auth.service');

const login = async (req, res) => {
  const authentication = await authService.authenticate(req.body);
  res.status(200).send(authentication);
};

module.exports = {
    login,
};