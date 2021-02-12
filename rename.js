var fs = require('fs');
fs.rename('ukifile2.text','sheshan.txt', function(err){
    if(err) throw err;
    console.log('file renamed');
})