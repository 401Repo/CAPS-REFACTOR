'use strict';

const chalk = require('chalk');
const port = 3000;
const io = require('socket.io')(port);


io.on('connection', (socket) => {
  console.log('CONNECTED SERVER', socket.id);
});

///////////////////// nameserver
const caps = io.of('/caps');

caps.on('connection', (socket) => {

  // First caps event
  socket.on('pickup', (payload) => {
    loggerMessage('PICKUP', payload);
    socket.broadcast.emit('pickup', payload);
  });
  // Creating the room
  socket.on('join', (room) => {
    const valid = ['Cosco'];
    if(valid.includes(room)) {
      socket.join(room);
    }
  });
  //Delivered event
  socket.on('delivered', (payload) => {
    loggerMessage('DELIVERED', payload);
    caps.to(payload.storeName).emit('delivered', payload);
  });

  socket.on('in-transit', (payload) => {
    loggerMessage('IN-TRANSIT', payload);
  });

});



function loggerMessage(event, payload) {
  console.log(chalk.inverse.blueBright(event), ': ');
  console.log({
    time: new Date().toString(),
    payload: payload,
  });
}

