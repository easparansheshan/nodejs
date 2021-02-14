var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = {Song_Name: "Hello", Film: "World", Music_Directorr: "Uki", Singer: "life"};
  dbo.collection("songdetails").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});