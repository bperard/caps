'use strict';

const Chance = require('chance');

const chance = new Chance();

const createOrder = () => ({
  store: '1-800-flowers',
  orderID: chance.guid(),
  customer: chance.name(),
  address: chance.address(),
});

const delivered = (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
};

module.exports = {createOrder, delivered};