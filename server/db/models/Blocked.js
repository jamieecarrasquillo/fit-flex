const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Blocked = sequelize.define('Blocked', {});

module.exports = Blocked;
