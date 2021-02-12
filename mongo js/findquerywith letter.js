var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sheshandb";

MongoClient.connect(url,{useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbobj =db.db("sheshan");
    var query = {name:/^S/};
    dbobj.collection('students').find(query).toArray(function(err,res){
        if(err)throw err;
        console.log(res);
        db.close()
    });
});