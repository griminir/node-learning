'use strict';

const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();

const { getTodos, getTodoById, addTask, updateTaskComplete } = todoController;

router.get('/todos', getTodos);
router.get('/todo/:id', getTodoById);
router.post('/todo', addTask);
router.put('/todo/:id', updateTaskComplete);

module.exports = {
  routes: router,
};
