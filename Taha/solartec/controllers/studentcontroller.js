const express=require("express")
const routes=express.Router();

const MongoClient = require("mongodb").MongoClient;
let dbUrl="mongodb://localhost:27017";
let dbName="soltec";
let colName="student";
routes.get("/",(req,res)=>{
    var pagedata={pagename:"student/student",title:"StudentBharvo"}
    res.render("layout",pagedata);
})


routes.post("/form",(req,res)=>{
    req.body.pno=parseInt(req.body.pno);
    req.body.class=parseInt(req.body.class);
    // console.log(req.body);
    MongoClient.connect(dbUrl,(err,connect)=>{
        if(err){
            console.log("error",err);
            return;}
        var db = connect.db(dbName);
        db.collection(colName).insertOne(req.body,(err)=>{
            if(err){console.log(err);
            return;}
            // console.log(req.body)       
        })
    })

    
    
})





module.exports= routes;