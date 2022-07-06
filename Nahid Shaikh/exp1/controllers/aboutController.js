const routes = require("express").Router();
 
routes.get("/about", (req, res)=>{
    res.render("about");
})

module.exports = routes;
