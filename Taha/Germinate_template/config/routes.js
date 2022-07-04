const express=require("express");
const routes=express.Router();


const HomeCtrl=require("../controllers/HomeController.js");
const AboutCtrl=require("../controllers/AboutController.js");
const ContactCtrl=require("../controllers/ContactController.js");
const ServicesCtrl=require("../controllers/ServicesController.js");
const IconsCtrl=require("../controllers/IconsController.js");

routes.use("/",HomeCtrl);
routes.use("/about",AboutCtrl);
routes.use("/contact",ContactCtrl);
routes.use("/services",ServicesCtrl);
routes.use("/icons",IconsCtrl);


module.exports=routes;