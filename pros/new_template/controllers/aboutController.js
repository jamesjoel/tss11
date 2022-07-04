const express = require("express");
const routes = express.Router();


routes.get("/",(req,res)=>{
    var pagedata = { pagename : "about/about" , title : "About Page"}
    res.render("layout", pagedata);
})
 module.exports = routes;