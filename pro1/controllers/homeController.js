// const express = require("express");
// const routes = express.Router();

const routes = require("express").Router();

routes.get("/", (req, res)=>{
    var pagedata = { pagename : "home/index" };
    res.render("layout", pagedata);
})

module.exports = routes;