'use strict';

const chalk = require('chalk');
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const caps = io.connect(`${host}/caps`);

caps.on('pickup', pickUpMessage);
caps.on('pickup', delivered);

function pickUpMessage(payload) {
  setTimeout( () => {
    console.log(chalk.inverse.yellowBright('DRIVER: Picked Up'), ': ');
    console.log(payload.orderId);
    console.log();
    caps.emit(chalk.inverse.greenBright('in-transit'), payload);
  }, 5000);
}

function delivered(payload) {
  setTimeout( () => {
    console.log(chalk.inverse.magentaBright('DRIVER: Delivered'), ': ');
    console.log(payload.orderId);
    console.log();
    caps.emit('delivered', payload);
  }, 3000);
}
