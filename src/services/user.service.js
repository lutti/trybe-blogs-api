const { User } = require('../models');

const findUserByLogin = async ({ email, password }) => {
  const user = await User.findOne({
  attributes: ['id', 'displayName', 'email'],
  where: { email, password },
  });
  return user;
};

module.exports = {
  findUserByLogin,
};