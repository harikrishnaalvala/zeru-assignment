const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
  walletAddress: String,
  totalRewardsReceivedStETH: String,
  rewardsBreakdown: [
    {
      operatorAddress: String,
      amountStETH: String,
      timestamps: [Number]
    }
  ],
  lastUpdated: Date
});

module.exports = mongoose.model('Reward', RewardSchema);
