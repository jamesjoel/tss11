const routes = require("express").Router();
const MongoClient = require("mongodb").MongoClient;

const dbUrl = "mongodb://localhost:27017";
const dbName = "tss11_new";
const collName = "student";

// localhost:3000/student
routes.get("/", (req, res)=>{
    var pagedata = { pagename : "student/index" };
    res.render("layout", pagedata);
})



// localhost:3000/student/save

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

            //console.log("data saved");
            res.redirect("/student/view");
        })

    });

});


// localhost:3000/student/view
routes.get("/view", (req, res)=>{

    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find().toArray((err, result)=>{
            // console.log(result);

            var pagedata = { pagename : "student/view", result : result };
            res.render("layout", pagedata);
        })
    })





    
})


module.exports = routes;

/*
    res.send()              data send
    res.sendFile()          file (html) send
    res.render()            file (ejs) and data send
    res.redirect()          redirect to url



*/