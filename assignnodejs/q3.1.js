var fs = require('fs');

fs.appendFile('ukinode.txt','uki is a coidng school to teach new devlopers to society',
function(err){
    if(err) throw err;
    console.log("File has created successfully");
});