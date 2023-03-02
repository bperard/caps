'use strict';

const handler = require('./handler');
const { socket } = require('../socket');

setInterval (() => {
  console.log('-------------=|=|<| NEW_ORDER |>|=|=-------------');
  const newOrder = handler.createOrder();
  socket.emit('PICKUP', newOrder);
}, 5000);

socket.on('DELIVERED', handler.delivered);