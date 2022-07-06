const routes = require("express").Router();
 
routes.get("/contact", (req, res)=>{
    res.render("contact");
})

module.exports = routes;