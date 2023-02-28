'use strict';

const Chance = require('chance');

const chance = new Chance();

const createOrder = () => ({
  store: chance.company(),
  orderID: chance.guid(),
  customer: chance.name(),
  adress: chance.address(),
});

const pickup = createOrder();

const delivered = (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
};

module.exports = {pickup, delivered};