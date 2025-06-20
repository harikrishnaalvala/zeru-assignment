const Reward = require('../models/reward');

exports.getRewardsByAddress = async (req, res) => {
  try {
    const { address } = req.params;
    const reward = await Reward.findOne({ walletAddress: address });

    if (!reward) {
      return res.status(404).json({ msg: 'No rewards found for this address' });
    }

    res.json(reward);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
