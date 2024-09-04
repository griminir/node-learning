'use strict';

const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();

const {getTodos} = todoController;

router.get('/todos', getTodos);

module.exports = {
  routes: router
}