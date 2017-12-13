git remote add origin https://github.com/harshsondhi/node-chat-app.git
git push -u origin master

npm install socket.io@1.4.8 --save

localhost:3000/socket.io/socket.io.js

socket.emit('createMessage',{from:'Harsh',text: 'This should work'});