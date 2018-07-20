var http = require("http");

http.createServer(function (request, response) {
  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-type': 'text/plain'});
  // Send the response body as 'Hello World'
  response.end('Hello World\n');
}).listen(8081);

console.log("Server is running at http://127.0.0.1:8081/");

// Blocking Code Example
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log("Program Ended");

// Non-Blocking Code Example
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("Program Ended");
