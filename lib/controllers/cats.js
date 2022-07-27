const { Router } = require('express');
// const { cats } = require('../../data/cats.js');
const Cat = require('../models/Cat.js');
const router = Router();

router.get('/:id', async (req, res) => {
  // const cat = cats.find((cat) => cat.id === req.params.id);
  const cat = await Cat.getById(req.params.id);
  res.json(cat);
})
  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.send(ids);
  });

module.exports = router;
