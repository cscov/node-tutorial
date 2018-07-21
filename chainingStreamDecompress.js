var fs = require('fs');
var zlib = require('zlib');

// Decompress the file input.txt.gz into input1.txt
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input1.txt'));

console.log("File decompressed");
