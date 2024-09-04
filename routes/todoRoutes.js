'use strict';

const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();

const { getTodos, getTodoById } = todoController;

router.get('/todos', getTodos);
router.get('/todo/:id', getTodoById);

module.exports = {
  routes: router,
};
