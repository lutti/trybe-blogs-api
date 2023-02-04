const { User } = require('../models');
const jwt = require('../utils/jwt');

const authenticate = async ({ email, password }) => {
  if (!email || !password) {
    const error = new Error('Campos faltantes');
    error.status = 401;
    throw error;
  }

  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email'],
    where: { email, password },
  });

  if (!user) {
    const error = new Error('Invalid fields');
    error.status = 400;
    throw error;
  }

  const token = jwt.generateToken(user.dataValues);

  return { token };
};

const authenticateToken = async (token) => {
  const payload = jwt.authenticateToken(token);
  return payload;
};

module.exports = {
  authenticate,
  authenticateToken,
};
