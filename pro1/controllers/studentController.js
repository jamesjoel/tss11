const routes = require("express").Router();
const mongodb = require("mongodb");
const Student = require("../models/Student");
const City = require("../models/City");

routes.get("/", (req, res)=>{

    City.bring({}, (err, result)=>{

        var pagedata = { pagename : "student/index", result : result };
        res.render("layout", pagedata);
    })

})
routes.post("/save", (req, res)=>{
    req.body.class = parseInt(req.body.class);
    req.body.fee = parseInt(req.body.fee);
    Student.add(req.body, (err)=>{
        res.redirect("/student/list");
    })

});
routes.get("/list", (req, res)=>{
    Student.search({}, (err, result)=>{
        var pagedata = { pagename : "student/list", result : result };
        res.render("layout", pagedata);
    });
})

routes.get("/view/:a", (req, res)=>{
   var id = req.params.a; // 62c540ed0751c016a0ab8d6e
    var objid = mongodb.ObjectId(id); // ObjectId("62c540ed0751c016a0ab8d6e")
    Student.search({ _id : objid }, (err, result)=>{
        var pagedata = { pagename : "student/view", result : result[0]};
        res.render("layout", pagedata);
    })
})

routes.get("/delete/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    Student.remove({ _id : objid }, (err)=>{
        res.redirect("/student/list");
    })
})

routes.get("/edit/:a", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.a);
    Student.search({ _id : objid }, (err, result1)=>{
        City.bring({}, (err, result2)=>{

            var pagedata = { pagename : "student/edit", result : result1[0], cities : result2 };
            res.render("layout", pagedata);
        })
    })
})



routes.post("/update/:a", (req, res)=>{
   
    var objid = mongodb.ObjectId(req.params.a);
    req.body.fee = parseInt(req.body.fee);
    req.body.class = parseInt(req.body.class);

    Student.edit({ _id : objid }, req.body, (err)=>{
        res.redirect("/student/list");
    })
})



module.exports = routes;

/*
    res.send()              data send
    res.sendFile()          file (html) send
    res.render()            file (ejs) and data send
    res.redirect()          redirect to url



*/