const authService = require('../services/auth.service');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  const result = await authService.authenticateToken(token);
  const { message, status } = result;
  if (message) return res.status(status).json({ message });

  return next();
};