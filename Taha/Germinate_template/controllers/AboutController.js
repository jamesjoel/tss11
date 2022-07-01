var express=require("express");
var routes=express.Router();


routes.get("/",(req,res)=>{
    var pagedata={pagename:"about/about",title:"about Page"};
    res.render("layout",pagedata);
})

module.exports=routes;