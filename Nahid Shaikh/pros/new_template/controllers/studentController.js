const express = require("express");
const routes = express.Router();

// const MongoClient = require("mongodb").MongoClient;

const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const dbUrl = "mongodb://127.0.0.1:27017";
const dbName = "new_temp";
const collName = "student";

routes.get("/", (req, res) => {
  var pagedata = { pagename: "student/index", title: "Student Page" };
  res.render("layout", pagedata);
});
routes.post("/save", (req, res) => {
  req.body.class = parseInt(req.body.class);
  req.body.fee = parseInt(req.body.fee);
  // console.log(req.body);
  // MongoClient.connect("mongodb://127.0.0.1:27017", (err, con)=>{
  //     console.log(err);
  //     console.log(con);
  // })
  // return;
  // console.log(MongoClient);
  MongoClient.connect(dbUrl, (err, con) => {
    // console.log(con);
    if (err){
      console.log(err);
      return;
    }
    var db = con.db(dbName);
    db.collection(collName).insertOne(req.body, (err) => {
      if (err){
        console.log(err);
        return;
      }
      // console.log(req.body);
      // console.log("saved");
      res.redirect("/student/list");
    });
  });
});

// localhost:3000/student/view
routes.get("/list", (req, res) => {
  MongoClient.connect(dbUrl, (err, con) => {
    var db = con.db(dbName);
    db.collection(collName).find().toArray((err, result) => {
        //  console.log(result);

        var pagedata = { pagename: "student/list", result: result };
        res.render("layout", pagedata);
      });
  });
});

routes.get("/view/:a", (req, res) => {
  //console.log(req.params.a);

  var id = req.params.a; // 62c540ed0751c016a0ab8d6e

  var objid = mongodb.ObjectId(id); // ObjectId("62c540ed0751c016a0ab8d6e")

  MongoClient.connect(dbUrl, (err, con) => {
    var db = con.db(dbName);
    db.collection(collName).find({ _id: objid }).toArray((err, result) => {
        // console.log(result[0]);
        var pagedata = { pagename: "student/view", result: result[0] };
        res.render("layout", pagedata);
      });
  });
});

routes.get("/delete/:a",(req,res)=>{
  // console.log("8888888888")
  // res.send("hello");return;
  var id = req.params.a; 

  var objid = mongodb.ObjectId(id);

  MongoClient.connect(dbUrl, (err, con) => {
    
    var db = con.db(dbName);
   db.collection(collName).deleteMany({_id : objid}, (err) => {
   
    res.redirect("/student/list");
    // res.send("hee");
      
    });
  });

});

routes.get("/edit/:a",(req, res)=>{
 var objid = mongodb.ObjectId(req.params.a);

 MongoClient.connect(dbUrl, (err, con) => {
  var db = con.db(dbName);
  db.collection(collName).find({ _id: objid }).toArray((err, result) => {
      // console.log(result[0]);
      var pagedata = { pagename: "student/edit", result: result[0] };
      res.render("layout", pagedata);
 })
 
    });

  });

  routes.post("/update/:a", (req, res)=>{
    // console.log(req.body);
    // return;

    var objid = mongodb.ObjectId(req.params.a);
    req.body.fee = parseInt(req.body.fee);
    req.body.class = parseInt(req.body.class);

    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).updateMany({ _id : objid }, {$set : req.body}, (err)=>{
            res.redirect("/student/list");
        })
    })
})

module.exports = routes;
