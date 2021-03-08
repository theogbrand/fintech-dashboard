const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ticker: {
    type: String,
    required: true,
  },
  weight: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
});

module.exports = mongoose.model('Stock', stockSchema);
