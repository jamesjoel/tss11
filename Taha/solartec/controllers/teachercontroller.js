const routes = require("express").Router();
const mongodb=require("mongodb");
const teacher=require("../model/Teacher");

routes.get("/",(req,res)=>{
   let pagedata={pagename:"teacher/teacher",title:"TeacherPage"};
   res.render("layout",pagedata);
})

routes.post("/save",(req,res)=>{
    // console.log(req.body);
     req.body.salary = parseInt(req.body.salary);  
    teacher.add(req.body,(err)=>{
        res.redirect("/teacher/teacherData");
        
    })
})

routes.get("/teacherData",(req,res)=>{
            teacher.search({},(err, result)=>{
                var pagedata={ pagename:"teacher/teacherData",title:"Teacher_DATA", result:result};
                res.render("layout",pagedata);        
        })
    
    
})



 routes.get("/more/:a",(req,res)=>{
    var id= req.params.a;
    var objId= mongodb.ObjectId(id)
    teacher.search({ _id : objId },(err,result)=>{
        var pagedata={pagename:"teacher/more",title:"more", data : result[0]}
        res.render("layout",pagedata);
                
    })
 })

 routes.get("/delete/:a",(req,res)=>{
    let objId=mongodb.ObjectId(req.params.a);
        teacher.remove({_id : objId},(err)=>{
            res.redirect("/teacher/teacherData");
    })   
 })

 routes.get("/edit/:a",(req,res)=>{
    let objId=mongodb.ObjectId(req.params.a);
        teacher.search({_id : objId},(err,result)=>{
            let pagedata={pagename:"teacher/teacherEdit",title:"Teacher_Edit",data:result[0]}
            res.render("layout",pagedata);
            
    })
 })

 routes.post("/update/:a",(req,res)=>{
    let objId=mongodb.ObjectId(req.params.a);
        teacher.edit({_id: objId } , req.body ,(err)=>{
         res.redirect("/teacher/teacherData");
        
    })
 })
module.exports = routes;