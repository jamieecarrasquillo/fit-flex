const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Following = sequelize.define('Following', {});

module.exports = Following;
