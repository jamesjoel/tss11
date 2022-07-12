
const express  = require("express");
const routes  = express.Router();

routes.get("/", (req, res)=>{

        const pagedata = {pagename : "menu", title : "home"}
        res.render("layout" , pagedata)
})

module.exports = routes;