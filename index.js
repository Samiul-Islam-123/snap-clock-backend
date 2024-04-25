// Import required modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize Express app
const app = express();
const server = http.createServer(app);

// Create a Socket.IO server instance
const io = socketIo(server);

// Define a route in Express
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Socket.IO logic
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle message event
  socket.on('message', (message) => {
    console.log('Message received:', message);
    // Broadcast the message to all connected clients
    io.emit('message', message);
  });

  // Handle disconnect event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});