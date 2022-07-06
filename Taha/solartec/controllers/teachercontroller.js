const routes = require("express").Router();


const MongoClient = require("mongodb").MongoClient;
let dbUrl="mongodb://localhost:27017";
let dbName="soltec";
let dbCol="teacher";

routes.get("/",(req,res)=>{
   let pagedata={pagename:"teacher/teacher",title:"TeacherPage"};
   res.render("layout",pagedata);
})

routes.post("/save",(req,res)=>{
    // console.log(req.body);
     req.body.salary = parseInt(req.body.salary);
     MongoClient.connect(dbUrl,(err,con)=>{
        if(err){
            console.log(err);
            return;
        }
        const db = con.db(dbName);
        db.collection(dbCol).insertOne(req.body,(err)=>{
            if(err){
                console.log(err);
                return;}
            // console.log(req.body);
            res.redirect("/teacher/teacherData");
        })
     })
})

routes.get("/teacherData",(req,res)=>{

    MongoClient.connect(dbUrl,(err,con)=>{
        var db=con.db(dbName);
        db.collection(dbCol).find().toArray((err,result)=>{
            var pagedata={ pagename:"teacher/teacherData",title:"Teacher_DATA", result:result};
            // console.log(res);
            res.render("layout",pagedata);        
        })
    })
    
})

module.exports = routes;