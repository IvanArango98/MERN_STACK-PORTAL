var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var database = require('./Database/database');
var auth = require("./auth/auth")

var UsuariosRouter = require("./routes/CrearUsuarios.routes");
var Curso = require("./routes/Curso.routes");


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//conectar a base de datos mongo
database.mongoConnect();

//Rutas 
app.use('/CrearUsuario', UsuariosRouter);

app.use(auth)

app.use('/Portal', Curso)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
  res.send('error');
  //res.json(err);
});

module.exports = app;
