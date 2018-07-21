var events = require("events");

// Create an eventEmitter object to fire events
var eventEmitter = new events.EventEmitter();

// Create an event handler
var connectHandler = function connected() {
  console.log("connection successful");

  // Fire the 'data received' event
  eventEmitter.emit('data_received');
};

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
  console.log("Data received successfully");
});

// Fire the 'connection' event
eventEmitter.emit('connection');

console.log("Program Ended");
