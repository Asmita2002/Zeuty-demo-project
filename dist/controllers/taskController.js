var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getRepository } from 'typeorm';
import { TaskEntity } from '../entities/TaskEntity';
// Create a new task
export const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskRepository = getRepository(TaskEntity);
        const newTask = taskRepository.create(req.body);
        yield taskRepository.save(newTask);
        res.status(201).json(newTask);
    }
    catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Failed to create task' });
    }
});
// Get all tasks
export const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskRepository = getRepository(TaskEntity);
        const tasks = yield taskRepository.find();
        res.json(tasks);
    }
    catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).json({ message: 'Failed to retrieve tasks' });
    }
});
