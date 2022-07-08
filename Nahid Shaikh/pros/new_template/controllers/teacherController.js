const express = require("express");
const routes = express.Router();

const mongodb =require("mongodb");

const MongoClient = mongodb.MongoClient;
const dbUrl = "mongodb://127.0.0.1:27017";
const dbName = "new_temp";
const collName = "student";

routes.get("/", (req, res) => {
  var pagedata = { pagename: "teacher/demo", title: "Student Page" };
  res.render("layout", pagedata);
});

routes.post("/save", (req, res) => {
  req.body.class = parseInt(req.body.class);
  req.body.salary = parseInt(req.body.salary);

  console.log(req.body);

  MongoClient.connect(dbUrl, (err, con) => {
    console.log(con);
    if (err) {
      console.log(err);
      return;
    }
    var db = con.db(dbName);
    db.collection(collName).insertOne(req.body, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(req.body);
      console.log("saved");
    });
  });
});

routes.get("/view_data", (req, res) => {

  MongoClient.connect(dbUrl, (err, con) => {
    var db = con.db(dbName);
    db.collection(collName)
      .find()
      .toArray((err, result) => {
        var pagedata = { pagename: "teacher/view_data", result: result };
        res.render("layout", pagedata);
      });
  });
});
routes.get("/list", (req, res) => {

  MongoClient.connect(dbUrl, (err, con) => {
    var db = con.db(dbName);
    db.collection(collName)
      .find()
      .toArray((err, result) => {
        var pagedata = { pagename: "teacher/list", result: result };
        res.render("layout", pagedata);
      });
  });
});


routes.get("/view/:a", (req, res)=>{
  //console.log(req.params.a);


  var id = req.params.a; 

  var objid = mongodb.ObjectId(id); 

  MongoClient.connect(dbUrl, (err, con)=>{
      var db = con.db(dbName);
      db.collection(collName).find({ _id : objid }).toArray((err, result)=>{

          // console.log(result[0]);
          var pagedata = { pagename : "teacher/view", result : result[0]};
          res.render("layout", pagedata);
      })
  })



})



module.exports = routes;


