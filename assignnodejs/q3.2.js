var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
fs.readFile('ukinode.txt',function(err,data){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("Uki is a coidng school to teach new devlopers to society");
    res.write(data);
    res.end();
});
}).listen(8080);