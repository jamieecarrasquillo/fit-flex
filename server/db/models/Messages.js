const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Messages = sequelize.define(
  'Messages',
  {
    text: {
      type: DataTypes.TEXT
    }
  },
  { paranoid: true, deletedAt: 'destroyTime' }
);

module.exports = Messages;
