const routes = require("express").Router();

routes.get("/", (req, res)=>{
    var pagedata = { pagename : "student/index" };
    res.render("layout", pagedata);
})

module.exports = routes;