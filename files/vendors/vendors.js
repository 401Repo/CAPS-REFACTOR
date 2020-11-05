'use strict';

const faker = require('faker');
const io = require('socket.io-client');
const host = 'http://localhost:3000';

const caps = io.connect(`${host}/caps`);

caps.on('delivered', thankYou);

function thankYou (payload) {
  console.log(`Thank you for Delivering ORDER: ${payload}`);
}

setInterval( () => {
  let payload = {
    storeName: faker.company.companyName(),
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  caps.emit('pickup', payload);
}, 5000);
