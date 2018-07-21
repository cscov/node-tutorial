var fs = require("fs");

var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write data to a stream and set encoding to be utf8
writerStream.write(data, 'UTF8');

// Mark the end of a file
writerStream.end();

// Handle stream events -> finish and error
writerStream.on('finish', function() {
  console.log("Write completed");
});

writerStream.on('error', function(err) {
  console.log(err.stack);
});

console.log("Program ended");
