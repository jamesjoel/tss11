const express=require("express");
const routes = express.Router();


routes.get("/",(req,res)=>{
    var pagedata={ pagename:"home/index" , title:"Home Page"};
    res.render("layout", pagedata);
})

module.exports=routes;