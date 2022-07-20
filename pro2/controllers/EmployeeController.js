const routes = require("express").Router();
const Employee = require("../models/Employee");
const City = require("../models/City");
const mongodb = require("mongodb");

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

routes.get("/delete/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    Employee.delete({ _id : objid }, (err)=>{
        res.redirect("/employee");
    })
})

routes.get("/edit/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    Employee.find({ _id : objid }, (err, result)=>{
        City.find({}, (err, city)=>{
            var pagedata = { pagename : "employee/edit", result : result[0], city : city };
            res.render("layout", pagedata);
        });
    })
})
routes.post("/update/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    Employee.update({ _id : objid }, req.body, (err)=>{
        res.redirect("/employee");
    })
})



module.exports = routes;