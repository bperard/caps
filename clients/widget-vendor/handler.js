'use strict';

const Chance = require('chance');

const chance = new Chance();

const createOrder = () => ({
  store: 'acme-widgets',
  orderID: chance.guid(),
  customer: chance.name(),
  address: chance.address(),
});

const delivered = (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
};

module.exports = {createOrder, delivered};