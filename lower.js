var http = require('http');
var lower = require('lower-case');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(lower.lowerCase("Hello uki welcome"));
    res.end();
}).listen(8080);