const express  = require("express");
const routes  = express.Router();

routes.get("/", (req, res)=>{

    var pagedata = {pagename : "menu", title : "menu"}
    res.render("layout" , pagedata)
})

module.exports = routes;