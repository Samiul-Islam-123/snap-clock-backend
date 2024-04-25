// Import required modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');


//import custom files
const connectDB = require('./Database/Connection.js')
const dotenv = require('dotenv')

// Initialize Express app
const app = express();
dotenv.config()
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
const PORT = process.env.PORT || 5000;
server.listen(PORT,async () => {
    console.log(`Server is starting...`)
    await connectDB(process.env.DBURL)
  console.log(`Server is up and running on port ${PORT}`);
});