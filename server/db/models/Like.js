const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Like = sequelize.define('Like', {});

module.exports = Like;
