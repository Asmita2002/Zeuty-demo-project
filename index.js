// index.js
const express = require('express');
const taskRoutes = require('./routes/taskRoutes.ts');

const app = express();

app.use(express.json());

// Register task routes
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
