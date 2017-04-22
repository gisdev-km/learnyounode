// Import the FileSystem module
var fs = require('fs');

// Filepath of provided file
file_path = process.argv[2];

// Read in contents of file async
fs.readFile(file_path, 'utf8', function(err, contents) {
    if (err) { return console.log(err); }

    console.log(contents.toString().split("\n").length - 1);
    
});
