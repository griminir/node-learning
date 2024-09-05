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

module.exports = {
  getTodos,
  getTodoById,
};
