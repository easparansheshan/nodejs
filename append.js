var fs = require('fs');
fs.appendFile('ukifile2.text','Hello I am sheshan i  am good boy', function(err){
    if(err) throw err;
    console.log('file created');
})