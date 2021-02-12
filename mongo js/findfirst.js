var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sheshandb";

MongoClient.connect(url,{useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbobj =db.db("sheshan");
    dbobj.collection('students').findOne({},function(err,res){
        if(err)throw err;
        console.log(res.name);
        db.close()
    });
});