const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const getProductTags = await ProductTag.findAll({
      include: [
        {
          model: Product,
          required: true,
        },
        {
          model: Tag,
          required: true,
        },
      ],
    });
    res.json(getProductTags);
  } catch(error) {
    res.status(400).json({error: error.message});
  // be sure to include its associated Category and Tag data

  // be sure to include its associated Product data
}});

router.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const getProductTag = await ProductTag.findByPk(id, {
        include: [Product],
      });
      if (getProductTag) {
        res.json(getProductTag);
      } else {
        res.status(404).json({ error: "Record not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  // be sure to include its associated Product data

router.post('/', async (req, res) => {
  try {
      const newProductTag = await ProductTag.create(req.body);
      res.status(201).json(newProductTag);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const [updateProductTag] = await ProductTag.update(req.body, { where: { id } });
      if (updateProductTag === 1) {
        res.json({ message: "Record updated successfully" });
      } else {
        res.status(404).json({ error: "Record not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const deleteProductTag = await ProductTag.destroy({ where: { id } });
      if (deleteProductTag === 1) {
        res.json({ message: "Record deleted successfully" });
      } else {
        res.status(404).json({ error: "Record not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

module.exports = router;
