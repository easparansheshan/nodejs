var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sheshandb";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbobj =db.db("sheshan");
    dbobj.createCollection("students",function(err,res){
        if(err)throw err;
        console.log("collection.created");
        db.close();
    })
});
