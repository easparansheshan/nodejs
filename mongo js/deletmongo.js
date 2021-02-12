var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sheshandb";

MongoClient.connect(url,{useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbobj =db.db("sheshan");
    //var query = {name:1};
   // var query = {age:20}
    //dbobj.collection('students').deleteOne(query,function(err,res){
        dbobj.collection('students').find({}).toArray(function(err,res){
        if(err)throw err;
        console.log(res);
        db.close()
    });
});