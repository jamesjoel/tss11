var express=require("express");
var routes=express.Router();


routes.get("/",(req,res)=>{
    var pagedata={pagename:"icons/icons",title:"icon Page"};
    res.render("layout" , pagedata);
})

module.exports=routes;