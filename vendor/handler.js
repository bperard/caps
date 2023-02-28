'use strict';

const pickup = {store: 'This Place'};

const delivered = (payload) => {
  console.log(`Payment of ${payload.cost} sent, don't come back ${payload.driver}`);
};

module.exports = {pickup, delivered};