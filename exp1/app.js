var express = require("express");
var app = express();

var MongoClient = require("mongodb").MongoClient;


MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
    var db = con.db("tss11_new");
    db.collection("student").find().toArray((err, result)=>{

        console.log(result);
        console.log("Welcome");
    })

})



app.listen(3000, ()=>{
    // console.log("server running");
});


