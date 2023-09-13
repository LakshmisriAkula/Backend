const fs = require('fs');
// fs.writeFile('test.txt', 'Hello World!', function (err) {
//     if (err)
//         console.log(err);//throwing new Error(‘unable to create”);
//     else
//         console.log('Write operation complete.');
// });

fs.readFile('test.txt', function (err, data) {
    if (err) throw err;
    // console.log(data);
    else console.log(data.toString());
});


var data = fs.readFileSync('test.txt', 'utf8');
console.log(data);
fs.appendFile('test.txt', 'Hello World!', function (err) {
    if (err)
        console.log(err);
    else
        console.log('Append operation complete.');
});
