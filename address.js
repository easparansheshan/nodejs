var url = require('url');
adr = 'http://localhost:8000/home.htm?/year=2021&name=uki';
var obj = url.parse(adr,true);
console.log(obj);
console.log(obj.host);
console.log(obj.pathname);
var data = obj.query;
console.log(data.name);