const express = require("express");
const routes = express.Router();

const MongoClient = require("mongodb").MongoClient;
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

routes.get("/view_data",(req, res)=>{

  MongoClient.connect(dbUrl, (err, con)=>{
    var db = con.db(dbName);
    db.collection(collName).find().toArray((err,result)=>{

      var pagedata= { pagename : "teacher/view_data", result : result };
      res.render("layout", pagedata);
    
    })
  })
 
});



module.exports = routes;
