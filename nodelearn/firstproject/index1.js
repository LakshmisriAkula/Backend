const path = require('path'); 
path.join('/path', 'to', 'test.txt'); // '/path/to/test.txt‘;
'/path' + '/' + 'to' + '/' + 'test.txt'; // '/path/to/test.txt' 
['/path', 'to', 'test.txt'].join('/'); // '/path/to/test.txt‘
console.log(path.join('data', 'test.txt')); // 'data/test.txt' 
console.log(path.join('data', '/test.txt')); // 'data/test.txt' 
console.log(path.join('data/', 'test.txt')); // 'data/test.txt' 
console.log(path.join('data/', '/test.txt')); // 'data/test.txt'
