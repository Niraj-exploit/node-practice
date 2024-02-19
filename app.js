var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./config/db-connection.config')
var indexRouter = require('./routes/index');
const ConnectToDatabase = require('./models/index.model')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

ConnectToDatabase()
    .then( ()=> {
        console.log("Connected to database...");
    } )
    .catch( (err)=> {
        console.log("Failed to connect to database", err);
    } )


//Routes
app.use('/', indexRouter);
app.use('/users', require('./routes/users.route'))
app.use('/book', require('./routes/books.route'))
app.use('/sales', require('./routes/sales.route'))

module.exports = app;
