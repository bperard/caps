'use strict';

const eventEmitter = require('./eventEmitter');

const EVENTS = ['PICKUP', 'DELIVERED', 'IN_TRANSIT'];

EVENTS.map(EVENT => {
  eventEmitter.on(EVENT, (payload) => {
    const eventNotification = {
      event: `${EVENT.toLowerCase()}`,
      time: Date(),
      payload,
    };
    console.log('EVENT', eventNotification);
  });
});

require('./driver');
require('./vendor');
