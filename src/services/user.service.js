const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const findUserByLogin = async ({ email, password }) => {
  const user = await User.findOne({
  attributes: ['id', 'displayName', 'email'],
  where: { email, password },
  });
  return user;
};

const findUserByEmail = async ({ email }) => {
  const user = await User.findOne({
  attributes: ['id', 'displayName', 'email'],
  where: { email },
  });
  return user;
};

const createUser = async ({
  displayName,
  email,
  password,
  image,
}) => User.create({ displayName, email, password, image: image || null });

module.exports = {
  findUserByLogin,
  findUserByEmail,
  createUser,
  getAll,
};