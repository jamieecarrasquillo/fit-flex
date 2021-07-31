const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Tags = sequelize.define('Tags', {
  hashtags: {
    type: DataTypes.TEXT
  }
});

module.exports = Tags;
