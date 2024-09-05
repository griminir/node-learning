'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getTodos = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('todos');
    const list = await pool.request().query(sqlQueries.allTodo);
    return list.recordset;
  } catch (error) {
    return error.message;
  }
};

const getTodoById = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('todos');
    const oneTodo = await pool
      .request()
      // first param of input is what it looks for in sql statment @x
      .input('id', sql.Int, id)
      .query(sqlQueries.TodoById);
    return oneTodo.recordset;
  } catch (error) {
    return error.message;
  }
};

const createTask = async (taskData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('todos');
    const insertTodo = await pool
      .request()
      .input('task', sql.NVarChar(400), taskData.task)
      .input('isActive', sql.Bit, taskData.isActive)
      .input('isComplete', sql.Bit, taskData.isComplete)
      .query(sqlQueries.createTodo);
    return insertTodo.recordset;
  } catch (error) {
    return error.message;
  }
};

const updateTaskComplete = async (id, taskData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('todos');
    const updateTodo = await pool
      .request()
      .input('id', sql.Int, id)
      .input('isActive', sql.Bit, taskData.isActive)
      .input('isComplete', sql.Bit, taskData.isComplete)
      .query(sqlQueries.updateTodo);
    return updateTodo.recordset;
  } catch (error) {
    return error.message;
  }
};

const deleteTask = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('todos');
    const deleted = await pool
      .request()
      .input('id', sql.Int, id)
      .query(sqlQueries.deleteTodo);
    return deleted.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getTodos,
  getTodoById,
  createTask,
  updateTaskComplete,
  deleteTask,
};
