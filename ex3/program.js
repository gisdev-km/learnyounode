// Import the FileSystem module
var fs = require('fs');

// Filepath of provided file
file_path = process.argv[2];

// Read in contents of file
file_buffer = fs.readFileSync(file_path);

// Convert contents to string
file_buffer_string = file_buffer.toString();

// Split at the new lines
line_count = file_buffer_string.split('\n');

// Output the count
console.log(line_count.length - 1);