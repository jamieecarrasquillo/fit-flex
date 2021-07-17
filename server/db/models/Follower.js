const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Follower = sequelize.define('Follower', {});

module.exports = Follower;
