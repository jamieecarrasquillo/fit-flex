const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Location = sequelize.define('Location', {
  latitude: {
    type: DataTypes.INTEGER
  },
  longitude: {
    type: DataTypes.INTEGER
  }
});

module.exports = Location;
