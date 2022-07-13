const routes  = require("express").Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbUrl = "mongodb://localhost:27017";
const dbname = "tss11";         
const collname = "student";


routes.get("/", (req, res)=>{
    var pagedata = {pagename : "student", title : "student"}
    res.render("layout" , pagedata)
});

routes.post("/form", (req , res)=>{
    
    req.body.class = parseInt(req.body.class);    
    req.body.fees = parseInt(req.body.fees);  
    // console.log(req.body)
    // return;  
    MongoClient.connect(dbUrl, (err, con)=>{
        if(err){
            console.log(err);
            return;
        }
        var db = con.db(dbname);
        db.collection(collname).insertOne(req.body, (err)=>{
            if(err){
                console.log(err);
                return;
            }
            res.redirect("/list")
            })
        })

    });
routes.get("/list" , (req, res)=>{
MongoClient.connect(dbUrl, (err, con)=>{
    var db = con.db(dbname);
    db.collection(collname).find().toArray((err, result)=>{
        // console.log(result)
        // return;
        var pagedata = {pagename : "list", title : "student list", result : result} ;
        // console.log(result[0])
            // return;
        res.render("layout" , pagedata)  
        
        })
    })
})
routes.get("/View/:a" , (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect(dbUrl, (err,con)=>{
        var db = con.db(dbname);
        db.collection(collname).find({_id : objid}).toArray((err, result)=>{
            console.log(result);
            var pagedata = {pagename : "View", title : "detail"};
            res.render("layout", pagedata);
              })
        })
     })
module.exports = routes;