var fs = require('fs');
fs.open('ukifile2.text','w', function(err,file){
    if(err) throw err;
    console.log('file created');
})