const WebSocket = require('ws');
const express = require('express');
 
const app = express();
 
const server = new WebSocket.Server({ server: app.listen(3030) });

server.on('connection', socket => {
  socket.on('message', message => {
    server.clients.forEach(client => {
      client.send(message);
    });
  });
});