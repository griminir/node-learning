'use strict';

const todoData = require('../data/todos');

const getTodos = async (req, res, next) => {
  try {
    const todos = await todoData.getTodos();
    res.send(todos);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getTodoById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const oneTodo = await todoData.getTodoById(id);
    if (oneTodo.length === 0) {
      res.status(400).send('there is no task with that Id');
    }
    res.send(oneTodo);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addTask = async (req, res, next) => {
  try {
    const data = req.body;
    const created = await todoData.createTask(data);
    res.send(created);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateTaskComplete = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updated = await todoData.updateTaskComplete(id, data);
    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getTodos,
  getTodoById,
  addTask,
  updateTaskComplete,
};
