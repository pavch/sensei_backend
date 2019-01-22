'use strict'
const Sequelize = require('sequelize');
module.exports = new Sequelize('postgres://dev@localhost:5432/sencei', { operatorsAliases: false });
