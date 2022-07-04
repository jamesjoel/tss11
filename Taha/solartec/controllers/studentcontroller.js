const { deepStrictEqual } = require("assert");
const exp = require("constants")
const express=require("express")
const routes=express.Router();


routes.get("/",(req,res)=>{
    var pagedata={pagename:"student/student",title:"StudentBharvo"}
    res.render("layout",pagedata);
})
routes.post("/form",(req,res)=>{
    req.body=parseInt(req.body);
    console.log(req.body);
})


module.exports= routes;