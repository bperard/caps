'use strict';

const handler = require('./handler');
const { socket } = require('../socket');

setInterval (() => {
  console.log('-------------=|=|<| NEW_WIDGET_ORDER |>|=|=-------------');
  const newOrder = handler.createOrder();
  const order = {
    queueType: newOrder.store,
    ...newOrder,
  };

  socket.emit('PICKUP', order);
}, 5000);

socket.on('DELIVERED', handler.delivered);