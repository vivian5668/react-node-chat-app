# react-node-chat-app

how to get HTTPS and WSS working

https://stackoverflow.com/questions/5312311/secure-websockets-with-self-signed-certificate


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