'use strict';

const eventEmitter = require('../eventEmitter');
const handler = require('./handler');

eventEmitter.on('PICKUP', (payload) => {
  handler.pickup(payload);

  eventEmitter.emit('IN_TRANSIT', payload);

  eventEmitter.emit('DELIVERED', payload);
});

eventEmitter.on('DELIVERED', (payload) => {
  handler.delivered(payload);
});