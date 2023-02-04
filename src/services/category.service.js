const { Category } = require('../models');

const createCategory = async ({
  name,
}) => Category.create({ name });

const findCategoryByName = async (name) => {
  const user = await Category.findOne({
    // attributes: ['id', 'displayName', 'email', 'image'],
    where: { name },
  });
  return user;
};

const getAll = async () => Category.findAll();

module.exports = {
  createCategory,
  findCategoryByName,
  getAll,
};