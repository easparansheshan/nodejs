var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sheshandb";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbobj =db.db("sheshan");
    var mydoc={name:"Sheshan",age:21,place:"Batticaloa"}
    dbobj.collection("students").insertOne(mydoc,
        function(err,res){
        if(err)throw err;
        console.log("new collection has been created");
        db.close();
    })
});
