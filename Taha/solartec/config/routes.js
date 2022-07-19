const express=require("express");
const routes=express.Router();
const  homeCtrl=require("../controllers/homecontroller.js");
const  aboutCtrl=require("../controllers/aboutcontroller.js");
const  contactCtrl=require("../controllers/contactcontroller.js");
const  projectCtrl=require("../controllers/projectcontroller.js");
const  featureCtrl=require("../controllers/featurecontroller.js");
const  quoteCtrl=require("../controllers/quotecontroller.js");
const studentCtrl=require("../controllers/studentcontroller.js")
const teacherCtrl=require("../controllers/teachercontroller.js")
const cityCtrl=require("../controllers/citycontroller.js")

routes.use("/",homeCtrl);
routes.use("/about",aboutCtrl);
routes.use("/contact",contactCtrl);
routes.use("/project",projectCtrl);
routes.use("/feature",featureCtrl);
routes.use("/quote",quoteCtrl);
routes.use("/student",studentCtrl);
routes.use("/teacher",teacherCtrl);
routes.use("/city",cityCtrl);



module.exports = routes;