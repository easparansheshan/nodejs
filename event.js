/*var fs = require('fs');
var rs = fs.createReadStream('./sheshan.txt');
rs.on('open', function () {
  console.log('The file is open');
});*/
var fs = require('fs');

var readStream = fs.createReadStream('./sheshan.txt');

/*Write to the console when the file is opened:*/
readStream.on('open', function () {
  //console.log('The file is open');
}).listen(8080);