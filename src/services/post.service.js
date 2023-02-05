const { BlogPost, Category, User } = require('../models');

const getAllPosts = async () => BlogPost.findAll(
  {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  },
);

module.exports = {
  getAllPosts,
};