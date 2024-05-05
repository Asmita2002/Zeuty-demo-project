// Import required modules
const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

// Create Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use task routes
app.use('/api', taskRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
