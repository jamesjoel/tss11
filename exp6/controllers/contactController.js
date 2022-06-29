const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    var pagedata = { pagename : "contact/index", title : "Contact Page"};
    res.render("layout", pagedata);
})
routes.get("/local", (req, res)=>{
    var pagedata = { pagename : "contact/local", title : "Contact Page"};
    res.render("layout", pagedata);
})
routes.get("/us", (req, res)=>{
    var pagedata = { pagename : "contact/us", title : "Contact Page"};
    res.render("layout", pagedata);
})

module.exports = routes;