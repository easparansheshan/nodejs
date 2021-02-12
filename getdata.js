var http = require('http');
var url = require('url');
var fs =  require('fs');
http.createServer(function(req,res){
    var obj = url.parse(req.url,true);
    var filename = "."+obj.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end("404 Not Found")
        }
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

var letters = /^[A-Za-z]+$/;
            if (inputtxt.value.match(letters)) {
                alert('Your name have accepted : you can try another');
                return true;
            }
            else {
                alert('Please input alphabet characters only');
                return false;
            }
