'use strict';

require('dotenv').config();
const { Server } = require('socket.io');

const server = new Server();
const PORT = process.env.PORT || 3002;
server.listen(PORT);

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log(`New user connected with ${socket.id}`);

  socket.on('PICKUP', (newOrder) => {
    socket.broadcast.emit('PICKUP', newOrder);
  });

  socket.on('IN_TRANSIT', (newOrder) => {
    socket.broadcast.emit('IN_TRANSIT', newOrder);
  });

  socket.on('DELIVERED', (newOrder) => {
    socket.broadcast.emit('DELIVERED', newOrder);
  });

  socket.onAny((event, payload) => {
    const eventNotification = {
      event: `${event.toLowerCase()}`,
      time: Date(),
      payload,
    };
    console.log('EVENT', eventNotification);
  });

});




