const express=require("express")
const routes=express.Router();
const mongodb=require("mongodb")
const student = require("../model/Student"); 

routes.get("/",(req,res)=>{
    var pagedata={pagename:"student/student",title:"StudentBharvo"}
    res.render("layout",pagedata);
})


routes.post("/form",(req,res)=>{
    req.body.pno=parseInt(req.body.pno);
    req.body.class=parseInt(req.body.class);
    // console.log(req.body);
    student.add(req.body,(err)=>{
        res.redirect("/student/studentData")
        })
})


routes.get("/studentData",(req,res)=>{
    student.search({},(err,result)=>{
        let pagedata={pagename:"student/studentData",title:"Student_Data",result:result};
        res.render("layout",pagedata)   

    })
})


routes.get("/more/:a",(req,res)=>{
    // console.log(req.params.a)
    var id=req.params.a;
    var objID=mongodb.ObjectId(id);
        student.search({_id:objID},(err,result)=>{
            let pagedata={pagename:"student/more",title:"More Information", result:result[0]}
            res.render("layout",pagedata)

    })

})

routes.get("/edit/:a",(req,res)=>{
    let objId=mongodb.ObjectId(req.params.a);
    student.search({_id : objId},(err,result)=>{
        let pagedata={ pagename:"student/edit" , title:"Edit page", data : result[0]}
        res.render("layout",pagedata);
    })
})

routes.post("/update/:a",(req,res)=>{
    let objId=mongodb.ObjectId(req.params.a)
    student.edit({_id:objId},req.body,(err)=>{
        res.redirect("/student/studentData") 
    })
})

routes.get("/delete/:a",(req,res)=>{
    let objId=mongodb.ObjectId(req.params.a)
    student.remove({_id:objId},(err)=>{
        res.redirect("/student/studentData");
    })
})
module.exports= routes;