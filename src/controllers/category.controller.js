const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });

  await categoryService.createCategory(req.body);
  const { id } = await categoryService.findCategoryByName(name);
  return res.status(201).json({ id, name });
};

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAll();
  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};