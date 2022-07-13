const routes = require("express").Router();
const Teacher = require("../models/Teacher");
const mongodb = require("mongodb");

routes.get("/", (req, res)=>{
    var pagedata  = { pagename : "teacher/index" };
    res.render("layout", pagedata);
})

routes.post("/save", (req, res)=>{
    Teacher.add(req.body, (err)=>{
        res.redirect("/teacher/list");
    })
})

routes.post("/update/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    Teacher.changes({ _id : objid }, req.body, (err)=>{
        res.redirect("/teacher/list");
    })
})

routes.get("/delete/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    Teacher.trash({ _id : objid }, (err)=>{
        res.redirect("/teacher/list");
    })
})

routes.get("/list", (req, rse)=>{
    Teacher.bring({}, (err, result)=>{

    })
})
routes.get("/view/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    Teacher.bring({ _id : objid }, (err, result)=>{

    })
});

routes.get("/salary/:a", (req, res)=>{
    var x = req.params.a;
    Teacher.bring({ salary : x }, (err, result)=>{
        
    })
})




module.exports = routes;