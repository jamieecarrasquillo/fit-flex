require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const sequelize = require('./db/db');

sequelize
  .authenticate()
  .then(() => console.log('Database connected.'))
  .catch((err) => console.log('Error: ') + err);

app.use(helmet());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./api'));

app.listen(process.env.PORT, () => {
  `Listening on port ${process.env.PORT}`;
});
