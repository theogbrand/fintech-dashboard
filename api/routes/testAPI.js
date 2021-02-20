var express = require('express');
var router = express.Router();
var dataHandler = require('./ORM');

// router.get('/', function (req, res, next) {
//   res.send('API is working properly');
// });

// Send a GET request to READ data file
router.get('/', async (req, res) => {
  try {
    const data = await dataHandler.getData();
    res.json(data);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
