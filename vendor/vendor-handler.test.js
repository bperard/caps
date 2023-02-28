'use strict';

const handler = require('./handler');

console.log = jest.fn();

describe('vendor-handler', () => {
  it('handler.delivered() Logs delivered event with payload.orderID', () => {
    const payload = {
      orderID: 42,
    };
    handler.delivered(payload);

    expect(console.log).toHaveBeenCalledWith(`VENDOR: Thank you for delivering ${payload.orderID}`);
  });
});