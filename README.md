# react-node-chat-app

how to get HTTPS and WSS working

https://www.giacomovacca.com/2015/02/websockets-over-nodejs-from-plain-to.html

http://web.archive.org/web/20181006211314/https://chovy.com/web-development/self-signed-certs-with-secure-websockets-in-node-js/

https://github.com/websockets/ws/blob/master/examples/ssl.js




openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 100 -nodes


var privateKey  = fs.readFileSync('sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

//... bunch of other express stuff here ...

//pass in your express app and credentials to create an https server
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443);