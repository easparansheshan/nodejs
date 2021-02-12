var fs = require('fs');

fs.unlink('sheshan.txt',
function(err){
    if(err) throw err;
    console.log("sheshan.txt succesfully deleted");
});