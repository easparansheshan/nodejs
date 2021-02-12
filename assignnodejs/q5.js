var fs = require('fs');

fs.rename('ukinode.txt','sheshan.txt',
function(err){
    if(err) throw err;
    console.log("New file name changed as sheshan.txt");
});