const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Like = sequelize.define('Like', {
  like: {
    type: DataTypes.BOOLEAN
  }
});

module.exports = Like;
