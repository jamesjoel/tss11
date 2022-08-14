const { response } = require("express");
const express  = require("express");
const routes  = express.Router();

routes.get("/", (req, res)=>{

    var pagedata = {pagename : "book", title : "book"}
    res.render("layout" , pagedata)
})

module.exports = routes;