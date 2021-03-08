var express = require('express');
var router = express.Router();
const Stock = require('../models/stock');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.send('Error', err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const stock = await Stock.findById(req.params.id);
    res.json(stock);
  } catch (err) {
    res.send('Error', err);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const stock = await Stock.findById(req.params.id);
    stock.weight = req.body.weight;
    const s1 = await stock.save();
    res.json(s1);
  } catch (err) {
    res.send('Error', err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const stock = await Stock.findById(req.params.id);
    const s1 = await stock.remove();
    console.log('successfully deleted object!');
    res.json(s1);
  } catch (err) {
    res.send('Error', err);
  }
});

router.post('/', async (req, res) => {
  const stock = new Stock({
    name: req.body.name,
    ticker: req.body.ticker,
    weight: req.body.weight,
  });

  try {
    const s1 = await stock.save();
    res.json(s1);
    console.log('successfully created object!');
  } catch (err) {
    res.send(err);
    console.log('FAILED to create object!');
  }
});

module.exports = router;
