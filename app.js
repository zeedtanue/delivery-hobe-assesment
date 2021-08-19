const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users');
const port = process.env.PORT || 5000;
const app = express();

// load env configurations
require('dotenv').config()

// load config files
const db = require('./config/db');

//load lib files
const logger = require('./lib/logger');

// check connections
db.mongo_conn.once('open', () => { logger.info('connected to mongodb') });

// check for connection errors
db.mongo_conn.on('error', (err) => { logger.error('mongodb connection error', err) });

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



app.listen(port,()=>{
  logger.info('sever running on port', port)
})

module.exports = app;
