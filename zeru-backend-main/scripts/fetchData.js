
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Restaker = require('../models/restaker');
const Validator = require('../models/validator');
const Reward = require('../models/reward'); // 👈 Add this line

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('🚀 MongoDB connected for seeding');


    await Restaker.deleteMany();
    await Validator.deleteMany();
    await Reward.deleteMany();

    await Restaker.insertMany([
      {
        userAddress: '0x1234567890abcdef1234',
        amountRestakedStETH: '100.5',
        targetAVSOperatorAddress: '0xabcde1234567890',
        lastUpdated: new Date()
      },
      {
        userAddress: '0x9876543210fedcba4321',
        amountRestakedStETH: '50.25',
        targetAVSOperatorAddress: '0xfedcba987654321',
        lastUpdated: new Date()
      }
    ]);
    console.log('✅ Seeded restaker data');

   
    await Validator.insertMany([
      {
        operatorAddress: '0xabcde1234567890',
        totalDelegatedStakeStETH: '5000',
        slashHistory: [
          {
            timestamp: 1678886400,
            amountStETH: '50',
            reason: 'Misconduct X'
          }
        ],
        status: 'active',
        lastUpdated: new Date()
      },
      {
        operatorAddress: '0xfedcba987654321',
        totalDelegatedStakeStETH: '3000',
        slashHistory: [],
        status: 'active',
        lastUpdated: new Date()
      }
    ]);
    console.log('✅ Seeded validator data');

   
    await Reward.insertMany([
      {
        walletAddress: '0x1234567890abcdef1234',
        totalRewardsReceivedStETH: '75.2',
        rewardsBreakdown: [
          {
            operatorAddress: '0xabcde1234567890',
            amountStETH: '60.0',
            timestamps: [1678972800, 1679059200]
          },
          {
            operatorAddress: '0xfedcba987654321',
            amountStETH: '15.2',
            timestamps: [1679145600]
          }
        ],
        lastUpdated: new Date()
      }
    ]);
    console.log('✅ Seeded reward data');

    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  });
