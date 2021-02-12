var fs = require('fs');

fs.appendFile('ukinode.txt','Helllo my name is sheshan',
function(err){
    if(err) throw err;
    console.log("File has updated successfully");
});