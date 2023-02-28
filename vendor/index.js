'use strict';

const eventEmitter = require('../eventEmitter');
const handler = require('./handler');

const startThis = () => {
  console.log('Here we go');
  eventEmitter.emit('PICKUP', handler.pickup);
};

eventEmitter.on('DELIVERED', handler.delivered);

startThis();