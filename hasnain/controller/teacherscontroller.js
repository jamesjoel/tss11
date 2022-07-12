
const express = require("express");
const routes = express.Router();

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbUrl = "mongodb://localhost:27017";
const dbname = "tss12";
const collname = "teachers"

routes.get("/", (req, res)=>{
    var pagedata = {pagename : "teachers" ,  title : "teachers"}
    res.render("layout", pagedata)
});


routes.post("/form", (req, res)=>{
    req.body.salary = parseInt(req.body.salary)
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbname);
        db.collection(collname).insertOne(req.body, (err)=>{

        

        if(err){
            console.log(err);
            return
        }
        res.redirect("./list2")
    })
    })
});

routes.get("/list2", (req, res)=>{
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbname);
       db.collection(collname).find().toArray((err, result)=>{


var pagedata = {pagename : "list2", title : "teachers list", result : result, };
res.render("layout", pagedata)

        })
    })
})

module.exports = routes;




