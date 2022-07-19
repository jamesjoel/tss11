const routes = require("express").Router();
const Employee = require("../models/Employee");
const City = require("../models/City");

routes.get("/", (req, res)=>{
    Employee.find({}, (err, result)=>{
        City.find({}, (err, city)=>{
            var pagedata = { pagename : "employee/index", result : result, city : city };
            res.render("layout", pagedata);

        })

    })
});

routes.post("/", (req, res)=>{
    // console.log(req.body);
    Employee.insert(req.body, (err)=>{
        res.redirect("/employee");
    })
})



module.exports = routes;