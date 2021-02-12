var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sheshandb";

MongoClient.connect(url,{useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbobj =db.db("sheshan");
  
    dbobj.dropCollection('sheshan1',function(err,del){
        if(err)throw err;
        if(del) console.log("deleted");
        db.close()
    });
});
