'use strict';

const handler = require('./handler');

console.log = jest.fn();

describe('driver-handler', () => {
  it('handler.pickup() Logs pickup event with payload.orderID', () => {
    const payload = {
      orderID: 42,
    };
    handler.pickup(payload);

    expect(console.log).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderID}`);
  });

  it('handler.delivered() Logs delivered event with payload.orderID', () => {
    const payload = {
      orderID: 42,
    };
    handler.delivered(payload);

    expect(console.log).toHaveBeenCalledWith(`DRIVER: delivered up ${payload.orderID}`);
  });
});