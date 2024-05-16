"use strict";
// routes/taskRoutes.ts
var express = require('express');
var _a = require('../controllers/taskController.ts'), createTask = _a.createTask, getAllTasks = _a.getAllTasks;
var router = express.Router();
// Define your routes here...
// Create a new task
router.post('/controllers', createTask);
// Get all tasks
router.get('/controllers', getAllTasks);
module.exports = router;
