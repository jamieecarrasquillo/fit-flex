const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Tags = sequelize.define('Tags', {});

module.exports = Tags;
