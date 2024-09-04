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

module.exports = {
  getTodos,
};
