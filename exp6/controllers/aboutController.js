const express = require("express");
const routes = express.Router();


routes.get("/", (req, res)=>{
    var pagedata = { pagename : "about/index", title : "About Page"}
    res.render("layout", pagedata);
});
routes.get("/more", (req, res)=>{
    var pagedata = { pagename : "about/more", title : "About Page : More"}
    res.render("layout", pagedata);
});
routes.get("/demo", (req, res)=>{
    var pagedata = { pagename : "about/demo", title : "TSS"}
    res.render("layout", pagedata);
});

module.exports = routes;