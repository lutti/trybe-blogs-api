const { User } = require('../models');

const findUserByLogin = async ({ email, password }) => {
  const user = await User.findOne({
  attributes: ['id', 'displayName', 'email'],
  where: { email, password },
  });
  return user;
};

const createUser = async ({
  displayName,
  email,
  password,
  image,
}) => User.createUser(displayName, email, password, image);

module.exports = {
  findUserByLogin,
  createUser,
};