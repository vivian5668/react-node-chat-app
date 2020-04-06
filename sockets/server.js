const fs = require('fs');
let clients = []

var ws_cfg = {
  ssl: true,
  port: 3030,
  ssl_key: '../server.key',
  ssl_cert: '../server.crt'
};

var processRequest = function(req, res) {
    console.log("Request received.")
};

var httpServ = require('https');
var app = null;

app = httpServ.createServer({
  key: fs.readFileSync('../keys/key.pem', 'utf8'),
  cert: fs.readFileSync('../keys/cert.pem', 'utf8')
}, processRequest).listen(ws_cfg.port);

//var WebSocketServer = require('ws').Server, ws_server = new WebSocketServer(ws_cfg);

var WebSocketServer = require('ws').Server, wss = new WebSocketServer( {server: app});

wss.on('connection', (connection) => {
  clients.push(connection);
  broadcast({
    username: "admin",
    message: "a user has entered"
  })


  connection.on('message', (message) => {
    const data = JSON.parse(message);
    broadcast(data)
  })
})

setInterval(cleanup, 100)

function broadcast(message) {
  const data = JSON.stringify(message)
  clients.forEach(client => client.send(data))
}

function cleanup() {
  const clientsLeaving = clients.filter(client => client.readyState === client.CLOSED)
  clients = clients.filter(client => client.readyState !== client.CLOSED)
  clientsLeaving.forEach(client =>
    broadcast({
      username: "admin",
      message: "a User has left"
    })
  )
}








// const fs = require('fs');
// const https = require('https');
// const server = https.createServer({
//   // port: 9090,
//   cert: fs.readFileSync('../rootCA.pem'),
//   key: fs.readFileSync('../rootCA.key')
// });

// // const WebSocketServer = require('ws').Server;

// var ws = require('ws').Server;
// var wss = new ws({
//     server: httpsServer
// });

// // const wss = new WebSocketServer(server)
// server.listen(9090)
// let clients = []
