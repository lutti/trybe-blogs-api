const { findUserByLogin } = require('../services/user.service');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await findUserByLogin(req.body);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  return next();
};