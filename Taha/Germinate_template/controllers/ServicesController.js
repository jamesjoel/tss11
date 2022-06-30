var express=require("express");
var routes=express.Router();


routes.get("/",(req,res)=>{
    var pagedata={pagename:"services/services",Title:"Service Page"};
    res.render("layout",pagedata);
})

module.exports=routes;