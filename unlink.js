var fs = require('fs');
fs.unlink('ukifile2.text', function(err,file){
    if(err) throw err;
    console.log('file deleted');
})