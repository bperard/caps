'use strict';

const eventEmitter = require('../eventEmitter');
const handler = require('./handler');

eventEmitter.on('PICKUP', (payload) => {
  handler.pickup(payload);

  eventEmitter.emit('DELIVERED', handler.delivered);
});