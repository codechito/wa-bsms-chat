var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');

var webRouter = require('./routes/web');
var apiRouter = require('./routes/api')(io);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/web', webRouter);
app.use('/whatsapp', apiRouter);

var port = 3000
app.set('port', port);
var server = http.createServer(app);
var io = require('socket.io')(server);

server.listen(port);

io.on('connection', function (socket) {
  console.log("chito");
  socket.emit('news', { hello: 'world' });
  socket.on('news', function (data) {
    console.log(data);
  });
});