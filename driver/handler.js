'use strict';

const pickup = (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);
};

const delivered = (payload) => {
  console.log(`DRIVER: delivered up ${payload.orderID}`);
};

module.exports = {pickup, delivered};