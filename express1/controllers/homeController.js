// const express = require("express");
// const routes = express.Router();

const routes = require("express").Router();
 
routes.get("/", (req, res)=>{
    var pagedata = { pagedata : "home/index"}
    res.render("layout", pagedata);
})

mmodule.exports = routes;