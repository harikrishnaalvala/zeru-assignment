const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config'); // MongoDB connection
const restakerRoutes = require('./routes/restakers');
const validatorRoutes = require('./routes/validators');
const rewardRoutes = require('./routes/rewards');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route registrations
app.use('/restakers', restakerRoutes);
app.use('/validators', validatorRoutes);
app.use('/rewards', rewardRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.send('EigenLayer Restaking Info API is running ✅');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
