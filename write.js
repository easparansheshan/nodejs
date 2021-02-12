var fs = require('fs');
fs.writeFile('ukifile1.txt','Hi....', function(err){
    if(err) throw err;
    console.log('file created');
})