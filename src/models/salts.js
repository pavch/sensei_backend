import moment from 'moment';
import uuid from 'uuid';
let Sequelize = require('sequelize'),
    db = require('../config/seq');

let Salt = db.define('salts', {
  number: Sequelize.INTEGER,
  keywords: Sequelize.JSON,
  name: Sequelize.STRING
}, {
    timestamps: false
});

module.exports = Salt;
