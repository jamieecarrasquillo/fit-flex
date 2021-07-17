const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

sequelize.sync().then(() => {
  console.log('Sequelize in sync');
});

module.exports = sequelize;
