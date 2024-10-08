'use strict';

const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();

const {
  getTodos,
  getTodoById,
  addTask,
  updateTaskComplete,
  deleteTask,
  getActiveTodos,
} = todoController;

router.get('/todos', getTodos);
router.get('/todo/:id', getTodoById);
router.post('/todo', addTask);
router.put('/todo/:id', updateTaskComplete);
router.delete('/todo/:id', deleteTask);
router.get('/todos/active', getActiveTodos);

module.exports = {
  routes: router,
};
