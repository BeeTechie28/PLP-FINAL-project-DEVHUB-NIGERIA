require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import CORS
const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---

// Enable CORS for frontend requests
app.use(cors({
  origin: '*',
  credentials: true,
}));


// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- Routes ---
app.use('/api/users', userRoutes);

// --- Test Route ---
app.get('/', (req, res) => res.send('Hello, DevHub API is running 🚀'));

// --- Start Server ---
const startServer = async () => {
  try {
    await connectDB(); // wait for MongoDB to connect
    console.log('✅ MongoDB Connected Successfully');
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB', err);
    process.exit(1); // exit if DB connection fails
  }
};

startServer();
