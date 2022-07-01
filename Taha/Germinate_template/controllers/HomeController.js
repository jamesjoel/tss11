var express=require("express");
var routes = express.Router();


routes.get("/",(req,res)=>{
    var pagedata={ pagename:"home/index" , title:"Home Page"};
    res.render("layout", pagedata);
})

module.exports=routes;