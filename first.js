var http = require('http');
var mydate = require('./module.js')
http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(mydate.DateTime());
    res.end();
}).listen(8000);