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

module.exports = {
  getTodos,
};
