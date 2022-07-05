const routes = require("express").Router();
const MongoClient = require("mongodb").MongoClient;

const dbUrl = "mongodb://localhost:27017";
const dbName = "tss11_new";
const collName = "student";


routes.get("/", (req, res)=>{
    var pagedata = { pagename : "student/index" };
    res.render("layout", pagedata);
})


// :3000/student/save


routes.post("/save", (req, res)=>{
    req.body.class = parseInt(req.body.class);
    req.body.fee = parseInt(req.body.fee);
    //console.log(req.body);
    MongoClient.connect(dbUrl, (err, con)=>{
        if(err){
            console.log(err);
            return;
        }
        var db = con.db(dbName);
        db.collection(collName).insertOne(req.body, (err)=>{
            if(err){
                console.log(err);
                return;
            }

            console.log("data saved");
        })

    });

});

module.exports = routes;