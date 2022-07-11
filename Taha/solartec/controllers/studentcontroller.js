const express=require("express")
const routes=express.Router();
const mongodb=require("mongodb")
const MongoClient = mongodb.MongoClient;
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


routes.get("/studentData",(req,res)=>{
    MongoClient.connect(dbUrl,(err,con)=>{
        let db=con.db(dbName);
        db.collection(colName).find().toArray((err,result)=>{
            // console.log(result);
            // return;
            let pagedata={pagename:"student/studentData",title:"Student_Data",result:result};
            res.render("layout",pagedata)   

        })
    })
})


routes.get("/more/:a",(req,res)=>{
    // console.log(req.params.a)
    var id=req.params.a;
    var objID=mongodb.ObjectId(id);
    // console.log(objID);
    // return;
    MongoClient.connect(dbUrl,(err,con)=>{
        let db=con.db(dbName);
        db.collection(colName).find({_id:objID}).toArray((err,result)=>{
            let pagedata={pagename:"student/more",title:"More Information", result:result[0]}
            res.render("layout",pagedata)

        })
    })

})

module.exports= routes;