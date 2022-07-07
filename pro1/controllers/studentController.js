const routes = require("express").Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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
            res.redirect("/student/list");
        })

    });

});


// localhost:3000/student/view
routes.get("/list", (req, res)=>{

    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find().toArray((err, result)=>{
            // console.log(result);

            var pagedata = { pagename : "student/list", result : result };
            res.render("layout", pagedata);
        })
    })
    
})


routes.get("/view/:a", (req, res)=>{
    //console.log(req.params.a);


    var id = req.params.a; // 62c540ed0751c016a0ab8d6e

    var objid = mongodb.ObjectId(id); // ObjectId("62c540ed0751c016a0ab8d6e")

    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find({ _id : objid }).toArray((err, result)=>{

            // console.log(result[0]);
            var pagedata = { pagename : "student/view", result : result[0]};
            res.render("layout", pagedata);
        })
    })



})




// routes.get("/hello/:a/:b/:c", (req, res)=>{
//     console.log(req.params);
// })








module.exports = routes;

/*
    res.send()              data send
    res.sendFile()          file (html) send
    res.render()            file (ejs) and data send
    res.redirect()          redirect to url



*/