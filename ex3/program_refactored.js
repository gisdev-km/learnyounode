// Import the FileSystem module
var fs = require('fs');

// Read in contents of file and output the line count
console.log(fs.readFileSync(process.argv[2], 'utf8').split("\n").length - 1);

