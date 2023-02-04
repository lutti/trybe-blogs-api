const userService = require('../services/user.service');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const user = await userService.findUserByEmail(req.body);
  if (user) return res.status(409).json({ message: 'User already registered' });

  return next();
};