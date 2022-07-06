const express = require("express");
const routes = express.Router();

// const MongoClient = require("mongodb").MongoClient;
const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://127.0.0.1:27017";
const dbName = "new_temp";
const collName = "student";



routes.get("/",(req,res)=>{
    var pagedata = { pagename : "student/index" , title : "Student Page"}
    res.render("layout", pagedata);
})
routes.post("/save",(req,res)=>{
//    req.body.class = parseInt(req.body.class);
//    req.body.fee = parseInt(req.body.fee);
    console.log(req.body);
    // MongoClient.connect("mongodb://127.0.0.1:27017", (err, con)=>{
    //     console.log(err);
    //     console.log(con);
    // })
    // return;
    // console.log(MongoClient);
    MongoClient.connect(dbUrl,(err,con)=>{
        // console.log(con);
        if(err){
            console.log(err);
            return;
        }
        var db = con.db(dbName);
        db.collection(collName).insertOne(req.body, (err)=>{
            if (err){
                console.log(err);
                return;
            }
            // console.log(req.body);
            console.log("saved");
        })

    });
});
 module.exports = routes;

 