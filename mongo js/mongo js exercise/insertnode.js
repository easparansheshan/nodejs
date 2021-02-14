var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sheshandb";

MongoClient.connect(url,{useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbobj =db.db("music");
    var mydoc=[
    {Song_Name: "Thaniye Thananthaniye", Film: "Rhythm", Music_Directorr: "A.R.Rahman", Singer: "Shangar mahadevan"},
    {Song_Name: "Evano Oruvan", Film: "Alai Payuthey", Music_Directorr: "A.R.Rahman", Singer: "Swarnalatha"},
    {Song_Name: "Roja Poonthottam", Film: "Kannukul Nilavu", Music_Directorr: "Ilaiyaraaja", Singer: ["Unnikrishnan","Anuradha Sriram"]},
    {Song_Name: "Vennilavae Vennilavae Vinnaithaandi", Film: "Minsara Kanavu", Music_Directorr: "A.R.Rahman", Singer: ["Hariharan","Sadhana Sargam"]},
    {Song_Name: "Sollamal Thottu Chellum Thendral", Film: "Dheena", Music_Directorr: "Yuvan Shangar Raja", Singer: "Hariharan"}
  ];
    dbobj.collection("songdetails").insertMany(mydoc,
        function(err,res){
        if(err)throw err;
        
        console.log("No of document inserted:"+ res.insertedCount);
        db.close();
    });
});