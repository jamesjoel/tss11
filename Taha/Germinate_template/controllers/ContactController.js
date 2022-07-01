var express=require("express");
var routes=express.Router();


routes.get("/",(req,res)=>{
    var pagedata={ pagename:"contact", title:"contact Page"};
    res.render("layout" , pagedata);
})

module.exports=routes;