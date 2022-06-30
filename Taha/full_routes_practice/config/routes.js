const app=require("express");
var routes=app.Router();


const homectr=require("../controllers/HomeController.js");
const aboutctr=require("../controllers/AboutController.js");
const contactctr=require("../controllers/ContactController.js");

routes.use("/",homectr);
routes.use("/about",aboutctr);
routes.use("/contact",contactctr);


module.exports = routes;