const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Post = sequelize.define(
  'Post',
  {
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    save: {
      type: DataTypes.BOOLEAN
    }
  },
  { paranoid: true, deletedAt: 'destroyTime' }
);

module.exports = Post;
