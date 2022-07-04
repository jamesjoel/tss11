const express = require("express");
const routes = express.Router();


routes.get("/",(req,res)=>{
    var pagedata = { pagename : "student/index" , title : "Student Page"}
    res.render("layout", pagedata);
})
routes.post("/save",(req,res)=>{
    console.log(req.body);
})
 module.exports = routes;