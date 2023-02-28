'use strict';

const pickup = (payload) => {
  console.log(payload);
};

const delivered = {cost: 34, driver: 'Fred'};

module.exports = {pickup, delivered};