'use strict';

const chalk = require('chalk');
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const caps = io.connect(`${host}/caps`);

caps.on('delivered', letsLog);

function letsLog() {
  setTimeout( () => {
    console.log(chalk.inverse.yellowBright('Lets log this:'), ': ');
    console.log();
  }, 5000);
}
