

var socket = io();
socket.on('connect', function(){
       console.log('Connected to server');
       socket.emit('createMessage', {
           from: 'Harsh Sondhi',
           text: 'Yes. That works for me.'
       });

});

socket.on('disconnect', function(){
     console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New email', message);
});