const mongoose = require('mongoose');

const RestakerSchema = new mongoose.Schema({
  userAddress: String,
  amountRestakedStETH: String,
  targetAVSOperatorAddress: String,
  lastUpdated: Date
});

module.exports = mongoose.model('Restaker', RestakerSchema);
