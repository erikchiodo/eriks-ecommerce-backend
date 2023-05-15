const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const getCategories = await Category.findAll();
    res.json(getCategories);
  } catch(error) {
    res.status(400).json({error: error.message});
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
    try {
      const { id } = req.params;
      const getCategory = await Category.findByPk(id);
      if (getCategory) {
        res.json(getCategory);
      } else {
        res.status(404).json({ error: "Record not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  })
  // be sure to include its associated Products

router.post('/', async (req, res) => {
  // create a new category
  try {
      const newCategory = await Category.create(req.body);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
      const { id } = req.params;
      const [updateCategory] = await Category.update(req.body, { where: { id } });
      if (updateCategory === 1) {
        res.json({ message: "Record updated successfully" });
      } else {
        res.status(404).json({ error: "Record not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
      const { id } = req.params;
      const deleteCategory = await Category.destroy({ where: { id } });
      if (deleteCategory === 1) {
        res.json({ message: "Record deleted successfully" });
      } else {
        res.status(404).json({ error: "Record not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

module.exports = router;
