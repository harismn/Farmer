// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app'); // The express app we just created
const {sequelize} = require('../server/models')

// const port = parseInt(process.env.PORT, 10) || 8000;
// app.set('port', port);
// var app = require('../app');
var debug = require('debug')('myfarmer:server');
// var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
/**
 * Create HTTP server.
 */

var server = http.createServer(app);


sequelize.sync()
.then(() =>{
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`listening on port ${port}`)
})

// const server = http.createServer(app);
// server.listen(port);