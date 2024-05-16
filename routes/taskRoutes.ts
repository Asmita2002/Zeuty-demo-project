// routes/taskRoutes.ts
const express = require('express');
const { createTask, getAllTasks } = require('../controllers/taskController.ts');

const router = express.Router();

// Define your routes here...
// Create a new task
router.post('/controllers', createTask);

// Get all tasks
router.get('/controllers', getAllTasks);

module.exports = router;
