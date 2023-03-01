'use strict';

const handler = require('./handler');

// const Chance = require('chance');

// const chance = new Chance();

// jest.mock('chance', () => ({
//   company: () => 'Wall Drug',
//   guid: () => 42,
//   name: () => 'Bobbi Bobberson',
//   address: () => '1234 Whatever Ct',
// }));

// chance.company = jest.fn();
// chance.guid = jest.fn();
// chance.name = jest.fn();
// chance.address = jest.fn();

// chance.company().mockReturnValue('Wall Drug');
// chance.guid().mockReturnValue(42);
// chance.name().mockReturnValue('Bobbi Bobberson');
// chance.address().mockReturnValue('1234 Whatever Ct');

console.log = jest.fn();

describe('vendor-handler', () => {
  // it('handler.createOrder generates a new order', () => {
  //   const newOrder = handler.createOrder();

  //   expect(newOrder).toEqual({
  //     store: 'Wall Drug',
  //     orderID: 42,
  //     customer: 'Bobbi Bobberson',
  //     address: '1234 Whatever Ct',
  //   });
  // });

  it('handler.delivered() Logs delivered event with payload.orderID', () => {
    const payload = {
      orderID: 42,
    };
    handler.delivered(payload);

    expect(console.log).toHaveBeenCalledWith(`VENDOR: Thank you for delivering ${payload.orderID}`);
  });
});