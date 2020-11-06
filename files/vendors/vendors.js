'use strict';

const chalk = require('chalk');
const faker = require('faker');
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const caps = io.connect(`${host}/caps`);
caps.emit('join', 'Cosco');

let x = 0;

let intervalID = setInterval( () => {
  let payload = {
    storeName: faker.company.companyName(),
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  setTimeout( () => {
    console.log(chalk.inverse.greenBright(`Thank you for ORDER: `));
    console.log(payload.storeName);
    console.log(payload.orderId);
    console.log(payload.customerName);
    console.log(payload.address);
  }, 5000);
  caps.emit('pickup', payload);
  if (++x === 6){
    console.log('Stopping at 5 to work on Queue')
    clearInterval(intervalID)
  }
}, 5000);




