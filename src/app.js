var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var seuilRouter = require('./seuil/routes/seuil.route');
var switchRouter = require('./device/routes/switch.route');
var io = require('./socketio');

var app = express();

app.use(cors({origin:'*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/seuil', seuilRouter);
app.use('/switch', switchRouter);

module.exports = app;
