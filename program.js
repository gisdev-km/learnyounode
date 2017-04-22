// Import the FileSystem module
const fs = require('fs');
const path = require('path');

// Filepath of provided file
folder = process.argv[2];
ext = "." + process.argv[3];

// Read in contents of file async
fs.readdir(folder, 'utf8', function(err, files) {
    if (err) { return console.log(err); }

    files.forEach(function(item) {

        if (path.extname(item) == ext) {
            console.log(item);
        }
        
    });
    
    
});
