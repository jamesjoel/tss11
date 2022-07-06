// const express = require("express");
// const routes = express.Router();

const routes = require("express").Router();
 
routes.get("/", (req, res)=>{
    res.render("home/index");
})

module.exports = routes;