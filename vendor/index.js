'use strict';

const eventEmitter = require('../eventEmitter');
const handler = require('./handler');

setInterval (() => {
  console.log('-------------=|=|<| NEW_ORDER |>|=|=-------------');
  const newOrder = handler.createOrder();
  eventEmitter.emit('PICKUP', newOrder);
}, 5000);

eventEmitter.on('DELIVERED', handler.delivered);