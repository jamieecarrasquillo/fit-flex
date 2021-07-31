const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Blocked = sequelize.define('Blocked', {
  ammount: {
    type: DataTypes.INTEGER
  },
  status: {
    type: DataTypes.ENUM('blocked', 'unblocked'),
    defaultValue: 'unblocked'
  }
});

module.exports = Blocked;
