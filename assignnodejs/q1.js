var http = require('http');
var sheshan = require('./q11.js');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("Sumation of two Number is  = "  +  sheshan.sum(123,321));
    res.write("Average Number of two number  is = " + sheshan.avg(123,321));
    res.end();
}).listen(8080);