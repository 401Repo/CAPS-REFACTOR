'use strict';

// const AnimalShelter = require('../files/vendors/vendors.js');


//Lets make a payload

let payload = {
  storeName: 'Robs',
  orderId: 'Rob324',
  customerName: 'Rob Roberts',
  address: '123 Robs ln, Robsonia RB, RRRRR',
};


describe('test our vendor generated payload', () => {

  it('Our payload is being passed correctly', () => {

    expect(payload.storeName).toEqual('Robs');
    expect(payload.storeName).toEqual('Rob324');
    expect(payload.storeName).toEqual('Rob Roberts');
    expect(payload.storeName).toEqual('123 Robs ln, Robsonia RB, RRRRR');
  });

});
