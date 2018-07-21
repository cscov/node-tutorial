var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output1.txt');

// Pipe the read and write operations
// read input.txt and pipe the data to output1.txt
readerStream.pipe(writerStream);

console.log('Program ended');
