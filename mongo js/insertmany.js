var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sheshandb";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbobj =db.db("sheshan");
    var mydoc=[
        {
           
            name:"Janu",
            age:21,
            place:"Bat"
        },
        {
           
            name:"Keseven",
            age:18,
            place:"kallar"
        },
        {
           _id: 1,
            name:"Sheshan",
            age:21,
            place:"Batticaloa"
        }
    
    ]
    dbobj.collection("students").insertMany(mydoc,
        function(err,res){
        if(err)throw err;
        
        console.log("No of document inserted:"+ res.insertedCount);
        db.close();
    });
});
