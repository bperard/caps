'use strict';

const handler = require('./handler');
const { socket } = require('../socket');

socket.on('PICKUP', (payload) => {
  handler.pickup(payload);

  socket.emit('IN_TRANSIT', payload);

  handler.delivered(payload);
  socket.emit('DELIVERED', payload);
});
