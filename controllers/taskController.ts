import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { TaskEntity } from '../entities/TaskEntity'; // Remove .ts extension

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  try {
    const taskRepository = getRepository(TaskEntity);
    const newTask = taskRepository.create(req.body);
    await taskRepository.save(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Failed to create task' });
  }
};

// Get all tasks
export const getAllTasks = async (req: Request, res: Response) => { // Add type annotations for Request and Response
  try {
    const taskRepository = getRepository(TaskEntity);
    const tasks = await taskRepository.find();
    res.json(tasks);
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).json({ message: 'Failed to retrieve tasks' });
  }
};
