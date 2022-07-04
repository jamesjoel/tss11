const routes = require("express").Router();

routes.get("/", (req, res)=>{
    var pagedata = { pagename : "student/index" };
    res.render("layout", pagedata);
})


// :3000/student/save


routes.post("/save", (req, res)=>{
    req.body.class = parseInt(req.body.class);
    req.body.fee = parseInt(req.body.fee);
    console.log(req.body);

});

module.exports = routes;